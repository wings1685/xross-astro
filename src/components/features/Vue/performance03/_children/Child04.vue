<script setup lang="ts">
	import { Child05 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child05 :relay="props.relay" :set-relay="props.setRelay" />
</template>
