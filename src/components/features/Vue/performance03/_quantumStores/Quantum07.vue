<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum07, vueSetQuantum08 } = useStore('vueQuantum');

	watch(
		() => vueQuantum07(),
		() => {
			if (!vueQuantum07()) return;

			vueSetQuantum08(vueQuantum07());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
