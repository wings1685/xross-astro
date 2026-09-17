<script setup lang="ts">
	import { Child03 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child03 :relay="props.relay" :set-relay="props.setRelay" />
</template>
