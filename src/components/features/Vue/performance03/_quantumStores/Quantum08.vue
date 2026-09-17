<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum08, vueSetQuantum09 } = useStore('vueQuantum');

	watch(
		() => vueQuantum08(),
		() => {
			if (!vueQuantum08()) return;

			vueSetQuantum09(vueQuantum08());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
