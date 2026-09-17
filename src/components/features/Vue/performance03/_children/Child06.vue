<script setup lang="ts">
	import { Child07 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child07 :relay="props.relay" :set-relay="props.setRelay" />
</template>
