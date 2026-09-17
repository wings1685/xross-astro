<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $stringStore05 } = useNanoStore('nanoString05');
	const store = useStore($stringStore05);
	const { $stringStore06 } = useNanoStore('nanoString06');

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			$stringStore05.set((value + 1).toString());
			if (value === dragRaceMax) {
				$stringStore05.set('');
				$stringStore06.set('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
