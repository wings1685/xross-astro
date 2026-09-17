<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum01, vueSetQuantum02 } = useStore('vueQuantum');

	watch(
		() => vueQuantum01(),
		() => {
			if (!vueQuantum01()) return;

			vueSetQuantum02(vueQuantum01());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
