<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData04, setQuantumData05 } = useQuantumDataContexts();

	watch(
		() => quantumData04.value,
		() => {
			if (!quantumData04.value) return;

			setQuantumData05(quantumData04.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
