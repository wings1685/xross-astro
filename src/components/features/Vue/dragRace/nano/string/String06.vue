<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $stringStore06 } = useNanoStore('nanoString06');
	const store = useStore($stringStore06);
	const { $stringStore07 } = useNanoStore('nanoString07');

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			$stringStore06.set((value + 1).toString());
			if (value === dragRaceMax) {
				$stringStore06.set('');
				$stringStore07.set('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
