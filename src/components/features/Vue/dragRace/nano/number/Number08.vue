<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore08 } = useNanoStore('nanoNumber08');
	const store = useStore($numberStore08);
	const { $numberStore09 } = useNanoStore('nanoNumber09');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore08.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore08.set(0);
				$numberStore09.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
