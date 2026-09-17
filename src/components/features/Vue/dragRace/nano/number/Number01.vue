<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { $startStore } = useNanoStore('nanoStart');
	const start = useStore($startStore);
	const { $numberStore01 } = useNanoStore('nanoNumber01');
	const store = useStore($numberStore01);
	const { $numberStore02 } = useNanoStore('nanoNumber02');

	watch(
		() => start.value,
		() => {
			if (start.value !== 'number') return;

			recordStart('VueNanoNumber');
			$numberStore01.set(1);
		}, { flush: 'pre' }
	);

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore01.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore01.set(0);
				$numberStore02.set(1);
			}
		}, { flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
