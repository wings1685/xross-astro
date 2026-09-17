<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData01, setQuantumData02 } = useQuantumDataContexts();

	watch(
		() => quantumData01.value,
		() => {
			if (!quantumData01.value) return;

			setQuantumData02(quantumData01.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
