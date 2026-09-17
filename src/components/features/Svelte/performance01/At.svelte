<script lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart, recordFinished } from "@/_global/lib/performance01";

	type Props = {
		id: string;
	};
	const { id }: Props = $props();

	const { svelteAtId, svelteSetAtId } = useStore('svelteAtId');

	let el: HTMLSpanElement | undefined;

	$effect(() => {
		if (!el || id !== svelteAtId()) return;

		el.scrollIntoView({ behavior: 'smooth' });
		recordFinished('GlobalSignal');
		svelteSetAtId('');
		recordStart('Hydration');
	});
</script>
<span bind:this={ el } id={ `at_${id}` } class="invisible_target"></span>
