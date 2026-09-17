<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $stringStore04 } = useNanoStore('nanoString04');
	const store = useStore($stringStore04);
	const { $stringStore05 } = useNanoStore('nanoString05');

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			$stringStore04.set((value + 1).toString());
			if (value === dragRaceMax) {
				$stringStore04.set('');
				$stringStore05.set('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
