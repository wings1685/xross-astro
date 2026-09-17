<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum06, vueSetQuantum07 } = useStore('vueQuantum');

	watch(
		() => vueQuantum06(),
		() => {
			if (!vueQuantum06()) return;

			vueSetQuantum07(vueQuantum06());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
