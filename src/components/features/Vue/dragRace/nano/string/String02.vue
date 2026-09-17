<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $stringStore02 } = useNanoStore('nanoString02');
	const store = useStore($stringStore02);
	const { $stringStore03 } = useNanoStore('nanoString03');

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			$stringStore02.set((value + 1).toString());
			if (value === dragRaceMax) {
				$stringStore02.set('');
				$stringStore03.set('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
