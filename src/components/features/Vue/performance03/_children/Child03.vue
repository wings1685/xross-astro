<script setup lang="ts">
	import { Child04 } from ".";
	import type { RelayProps } from "../_models/types";

	const props = defineProps<RelayProps>();
</script>
<template>
	<Child04 :relay="props.relay" :set-relay="props.setRelay" />
</template>
