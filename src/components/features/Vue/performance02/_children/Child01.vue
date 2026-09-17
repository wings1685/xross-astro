<script setup lang="ts">
	import { Child02 } from "./index.ts";
	import type { RelayProps } from "../_models/RelayContext.vue";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child02 :relay="props.relay" />
	<!-- <p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p>
	<p>{{ props.relay }}</p> -->
</template>
