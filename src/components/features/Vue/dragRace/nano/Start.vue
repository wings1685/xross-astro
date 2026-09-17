<script setup lang="ts">
	import { useNanoStore } from "../_models/nano";

	const { $startStore } = useNanoStore('nanoStart');

	const raceStart = () => {
		$startStore.set('number');
	};
</script>
<template>
	<fieldset>
		<button @click="raceStart">Start Vue Nano Stores!!!</button>
	</fieldset>
</template>
