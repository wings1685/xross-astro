<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

	const { $numberStore10 } = useNanoStore('nanoNumber10');
	const store = useStore($numberStore10);
	const { $startStore } = useNanoStore('nanoStart');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			if (store.value === dragRaceMax) {
				recordFinished('VueNanoNumber');
				$numberStore10.set(0);
				$startStore.set('string');
			} else {
				$numberStore10.set(store.value + 1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
