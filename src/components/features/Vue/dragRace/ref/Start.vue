<script setup lang="ts">
	import { useStore } from "@/_global/piquo";

	const { setStart } = useStore('vueStart');

	const raceStart = () => {
		setStart('number');
	};
</script>
<template>
	<fieldset>
		<button @click="raceStart">Start Vue Ref!!!</button>
	</fieldset>
</template>
