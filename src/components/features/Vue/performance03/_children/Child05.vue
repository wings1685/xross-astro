<script setup lang="ts">
	import { Child06 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child06 :relay="props.relay" :set-relay="props.setRelay" />
</template>
