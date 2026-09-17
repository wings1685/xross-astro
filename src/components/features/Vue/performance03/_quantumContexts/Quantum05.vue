<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData05, setQuantumData06 } = useQuantumDataContexts();

	watch(
		() => quantumData05.value,
		() => {
			if (!quantumData05.value) return;

			setQuantumData06(quantumData05.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
