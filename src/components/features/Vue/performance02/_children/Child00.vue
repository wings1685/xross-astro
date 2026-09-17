<script setup lang="ts">
	import { ref } from "vue";
	import { recordStart } from "@/_global/lib/performance02";
	import { useRelayDataContexts } from "../_models/RelayContext.vue";
	import { useStore } from "@/_global/piquo";
	import { Child01 } from "./index.ts";

	const { setRelayData } = useRelayDataContexts();
	const { vueSetRelay } = useStore('vueRelay');
	const relayStart = ref(0);

	const handleClick = async () => {
		const start = relayStart.value + 1;
		recordStart('RelayProps');
		relayStart.value = start;

		recordStart('RelayContext');
		setRelayData(start);

		recordStart('RelayStore');
		vueSetRelay(start);
	};
</script>
<template>
	<fieldset>
		<button @click="handleClick">バケツリレー開始</button>
	</fieldset>
	<Child01 :relay="relayStart" />
</template>
