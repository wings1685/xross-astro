<script setup lang="ts">
	import { watch } from "vue";
	import { useQuantumDataContexts } from "../_models/QuantumContext.vue";

	const { quantumData03, setQuantumData04 } = useQuantumDataContexts();

	watch(
		() => quantumData03.value,
		() => {
			if (!quantumData03.value) return;

			setQuantumData04(quantumData03.value);
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
