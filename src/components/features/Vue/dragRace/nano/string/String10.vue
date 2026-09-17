<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

	const { $stringStore10 } = useNanoStore('nanoString10');
	const store = useStore($stringStore10);
	const { $startStore } = useNanoStore('nanoStart');

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			if (value === dragRaceMax) {
				recordFinished('VueNanoString');
				logTotal('VueNano');
				$startStore.set(null);
				$stringStore10.set('');
			} else {
				$stringStore10.set((value + 1).toString());
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
