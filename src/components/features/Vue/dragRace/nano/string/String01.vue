<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { $startStore } = useNanoStore('nanoStart');
	const start = useStore($startStore);
	const { $stringStore01 } = useNanoStore('nanoString01');
	const store = useStore($stringStore01);
	const { $stringStore02 } = useNanoStore('nanoString02');

	watch(
		() => start.value,
		() => {
			if (start.value !== 'string') return;

			recordStart('VueNanoString');
			$stringStore01.set('1');
		}, { flush: 'pre' }
	);

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			$stringStore01.set((value + 1).toString());
			if (value === dragRaceMax) {
				$stringStore01.set('');
				$stringStore02.set('1');
			}
		}, { flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
