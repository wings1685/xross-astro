<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum09, vueSetQuantum10 } = useStore('vueQuantum');

	watch(
		() => vueQuantum09(),
		() => {
			if (!vueQuantum09()) return;

			vueSetQuantum10(vueQuantum09());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
