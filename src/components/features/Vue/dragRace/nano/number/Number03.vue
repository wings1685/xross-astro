<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore03 } = useNanoStore('nanoNumber03');
	const store = useStore($numberStore03);
	const { $numberStore04 } = useNanoStore('nanoNumber04');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore03.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore03.set(0);
				$numberStore04.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
