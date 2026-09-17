<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $stringStore08 } = useNanoStore('nanoString08');
	const store = useStore($stringStore08);
	const { $stringStore09 } = useNanoStore('nanoString09');

	watch(
		() => store.value,
		() => {
			const value = +store.value;
			if (!value) return;

			$stringStore08.set((value + 1).toString());
			if (value === dragRaceMax) {
				$stringStore08.set('');
				$stringStore09.set('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
