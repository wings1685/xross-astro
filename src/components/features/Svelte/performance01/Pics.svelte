<script lang="ts">
	import { onMount } from "svelte";
	import { picKeys, recordStart, recordFinished } from "@/_global/lib/performance01";
	import { Pic } from "./";

	let text = $state('');
	let elParagraph: HTMLParagraphElement | undefined;

	onMount(() => {
		recordFinished('Hydration');
	});
	const handleChange = async (e: Event & { currentTarget: EventTarget & HTMLInputElement; }) => {
		recordStart('ReRender');
		text = e.currentTarget.value;
	};
	$effect(() => {
		if (elParagraph?.textContent !== text) return;

		recordFinished('ReRender');
	});
</script>
<form id="pics">
	<fieldset>
		<input type="text" onchange={ handleChange } />
	</fieldset>
	{#each picKeys as picKey (picKey)}
		<Pic picKey={ picKey } />
	{/each}
	<fieldset>
		<p bind:this={ elParagraph }>{ text }</p>
	</fieldset>
</form>
