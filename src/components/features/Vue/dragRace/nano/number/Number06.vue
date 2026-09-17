<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore06 } = useNanoStore('nanoNumber06');
	const store = useStore($numberStore06);
	const { $numberStore07 } = useNanoStore('nanoNumber07');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore06.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore06.set(0);
				$numberStore07.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
