<script setup lang="ts">
	import { useStore } from "@/_global/piquo";

	const { vueQuery } = useStore('vueQuery');
	const { vueIsChecked } = useStore('vueIsChecked');
</script>
<template>
	<hr />
	<div>
		<p>
			<span>Vue Store = </span>
			{{ vueQuery() }} / {{ vueIsChecked().toString() }}
		</p>
	</div>
</template>
