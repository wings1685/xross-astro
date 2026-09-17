<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData07, setQuantumData08 } = useQuantumDataContexts();

	watch(
		() => quantumData07.value,
		() => {
			if (!quantumData07.value) return;

			setQuantumData08(quantumData07.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
