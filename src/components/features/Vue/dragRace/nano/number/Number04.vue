<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore04 } = useNanoStore('nanoNumber04');
	const store = useStore($numberStore04);
	const { $numberStore05 } = useNanoStore('nanoNumber05');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore04.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore04.set(0);
				$numberStore05.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
