<script setup lang="ts">
	import { useStore } from "@/_global/piquo";

	const { solidQuery, solidSetQuery } = useStore('solidQuery');
	const { solidIsChecked, solidSetChecked } = useStore('solidIsChecked');
	const { svelteQuery, svelteSetQuery } = useStore('svelteQuery');
	const { svelteIsChecked, svelteSetChecked } = useStore('svelteIsChecked');
	const { vueQuery, vueSetQuery } = useStore('vueQuery');
	const { vueIsChecked, vueSetChecked } = useStore('vueIsChecked');
</script>
<template>
	<div>
		<p>
			<span>(created) Solid = </span>
			<input type="text" :value="solidQuery()" @input="e => solidSetQuery((e.currentTarget as HTMLInputElement).value)" />
			<input type="checkbox" :checked="solidIsChecked()" @change="e => solidSetChecked((e.currentTarget as HTMLInputElement).checked)" />
		</p>
		<p>
			<span>(created) Svelte = </span>
			<input type="text" :value="svelteQuery()" @input="e => svelteSetQuery((e.currentTarget as HTMLInputElement).value)" />
			<input type="checkbox" :checked="svelteIsChecked()" @change="e => svelteSetChecked((e.currentTarget as HTMLInputElement).checked)" />
		</p>
		<p>
			<span>(created) Vue = </span>
			<input type="text" :value="vueQuery()" @input="e => vueSetQuery((e.currentTarget as HTMLInputElement).value)" />
			<input type="checkbox" :checked="vueIsChecked()" @change="e => vueSetChecked((e.currentTarget as HTMLInputElement).checked)" />
		</p>
	</div>
</template>
