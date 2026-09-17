<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData06, setQuantumData07 } = useQuantumDataContexts();

	watch(
		() => quantumData06.value,
		() => {
			if (!quantumData06.value) return;

			setQuantumData07(quantumData06.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
