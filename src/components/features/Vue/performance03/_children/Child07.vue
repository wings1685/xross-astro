<script setup lang="ts">
	import { Child08 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child08 :relay="props.relay" :set-relay="props.setRelay" />
</template>
