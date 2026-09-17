<script setup lang="ts">
	import { Child10 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child10 :relay="props.relay" :set-relay="props.setRelay" />
</template>
