<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData09, setQuantumData10 } = useQuantumDataContexts();

	watch(
		() => quantumData09.value,
		() => {
			if (!quantumData09.value) return;

			setQuantumData10(quantumData09.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
