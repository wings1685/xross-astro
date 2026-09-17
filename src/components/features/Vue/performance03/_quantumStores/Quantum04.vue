<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum04, vueSetQuantum05 } = useStore('vueQuantum');

	watch(
		() => vueQuantum04(),
		() => {
			if (!vueQuantum04()) return;

			vueSetQuantum05(vueQuantum04());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
