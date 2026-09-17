<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore07 } = useNanoStore('nanoNumber07');
	const store = useStore($numberStore07);
	const { $numberStore08 } = useNanoStore('nanoNumber08');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore07.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore07.set(0);
				$numberStore08.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
