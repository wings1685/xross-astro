<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore02 } = useNanoStore('nanoNumber02');
	const store = useStore($numberStore02);
	const { $numberStore03 } = useNanoStore('nanoNumber03');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore02.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore02.set(0);
				$numberStore03.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
