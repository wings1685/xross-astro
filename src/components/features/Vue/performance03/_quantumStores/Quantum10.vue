<script setup lang="ts">
	import { watch } from "vue";
	import { loopTotal, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { vueSetQuantumStoreStart, vueSetQuantum01, vueQuantum10 } = useStore('vueQuantum');

	const incrementStore = (value: number) => {
		vueSetQuantum01(value + 1);
	};

	watch(
		() => vueQuantum10(),
		() => {
			if (!vueQuantum10()) return;

			if (vueQuantum10() >= loopTotal) {
				recordFinished('QuantumStore');

				vueSetQuantumStoreStart(0);
				return;
			}

			incrementStore(vueQuantum10());
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
