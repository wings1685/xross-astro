<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance03";

	const { vueQuantumStoreStart, vueSetQuantum01 } = useStore('vueQuantum');

	watch(
		() => vueQuantumStoreStart(),
		() => {
			if (!vueQuantumStoreStart()) return;

			recordStart('QuantumStore');
			vueSetQuantum01(vueQuantumStoreStart());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
