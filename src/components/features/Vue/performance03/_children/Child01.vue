<script setup lang="ts">
	import { Child02 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child02 :relay="props.relay" :set-relay="props.setRelay" />
</template>
