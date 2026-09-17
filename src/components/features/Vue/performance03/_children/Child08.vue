<script setup lang="ts">
	import { Child09 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child09 :relay="props.relay" :set-relay="props.setRelay" />
</template>
