<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum02, vueSetQuantum03 } = useStore('vueQuantum');

	watch(
		() => vueQuantum02(),
		() => {
			if (!vueQuantum02()) return;

			vueSetQuantum03(vueQuantum02());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
