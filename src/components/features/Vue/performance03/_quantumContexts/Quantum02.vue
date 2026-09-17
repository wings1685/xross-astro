<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData02, setQuantumData03 } = useQuantumDataContexts();

	watch(
		() => quantumData02.value,
		() => {
			if (!quantumData02.value) return;

			setQuantumData03(quantumData02.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
