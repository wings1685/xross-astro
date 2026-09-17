<script setup lang="ts">
	import { useStore } from "@/_global/piquo";

	const { vueSetQuantumStoreStart, vueSetQuantumContextStart } = useStore('vueQuantum');

	const handleClick = () => {
		vueSetQuantumContextStart(1);
		vueSetQuantumStoreStart(1);
	};
</script>
<template>
	<fieldset>
		<button @click="handleClick">50 連鎖スタート</button>
	</fieldset>
</template>
