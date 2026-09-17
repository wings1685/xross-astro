<script setup lang="ts">
	import { useStore } from "@/_global/piquo";

	const { vueRaceNo, vueSetRaceNo } = useStore('vueRaceNo');

	const handleClick = () => {
		vueSetRaceNo(vueRaceNo() + 1);
	};
</script>
<template>
	<fieldset>
		<button @click="handleClick">10 連鎖スタート</button>
	</fieldset>
</template>
