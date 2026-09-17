<script setup lang="ts">
	import { Child06 } from "./index.ts";
	import type { RelayProps } from "../_models/RelayContext.vue";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child06 :relay="props.relay" />
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
