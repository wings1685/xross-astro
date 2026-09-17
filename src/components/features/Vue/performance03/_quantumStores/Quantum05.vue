<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum05, vueSetQuantum06 } = useStore('vueQuantum');

	watch(
		() => vueQuantum05(),
		() => {
			if (!vueQuantum05()) return;

			vueSetQuantum06(vueQuantum05());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
