<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore09 } = useNanoStore('nanoNumber09');
	const store = useStore($numberStore09);
	const { $numberStore10 } = useNanoStore('nanoNumber10');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore09.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore09.set(0);
				$numberStore10.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
