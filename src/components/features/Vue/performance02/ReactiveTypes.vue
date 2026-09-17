<script setup lang="ts">
	import { ref } from "vue";
	import { Flags, NestObject, Primitive } from "./";

	const start = ref(0);

	const handleClick = async () => {
		start.value++;
	};
</script>
<template>
	<fieldset>
		<button @click="handleClick">リアクティブ構造差の計測開始</button>
	</fieldset>
	<Primitive :start="start" />
	<NestObject :start="start" />
	<Flags :start="start" />
</template>
