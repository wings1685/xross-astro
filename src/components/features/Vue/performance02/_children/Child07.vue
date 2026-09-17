<script setup lang="ts">
	import { Child08 } from "./index.ts";
	import type { RelayProps } from "../_models/RelayContext.vue";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child08 :relay="props.relay" />
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
