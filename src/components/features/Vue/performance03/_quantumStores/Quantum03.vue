<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";

	const { vueQuantum03, vueSetQuantum04 } = useStore('vueQuantum');

	watch(
		() => vueQuantum03(),
		() => {
			if (!vueQuantum03()) return;

			vueSetQuantum04(vueQuantum03());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
