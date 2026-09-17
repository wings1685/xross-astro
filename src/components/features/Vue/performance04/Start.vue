<script setup lang="ts">
	import { recordStart } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueSetRaceId } = useStore('vueRaceId');

	const handleClick = () => {
		recordStart('Race');
		vueSetRaceId('Effect');
	};
</script>
<template>
	<fieldset>
		<button @click="handleClick">レーススタート！</button>
	</fieldset>
</template>
