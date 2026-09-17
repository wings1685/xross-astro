<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData08, setQuantumData09 } = useQuantumDataContexts();

	watch(
		() => quantumData08.value,
		() => {
			if (!quantumData08.value) return;

			setQuantumData09(quantumData08.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
