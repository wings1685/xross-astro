<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $stringStore09 } = useNanoStore('nanoString09');
	const store = useStore($stringStore09);
	const { $stringStore10 } = useNanoStore('nanoString10');

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			$stringStore09.set((value + 1).toString());
			if (value === dragRaceMax) {
				$stringStore09.set('');
				$stringStore10.set('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
