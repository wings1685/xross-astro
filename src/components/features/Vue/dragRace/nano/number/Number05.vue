<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@nanostores/vue";
	import { useNanoStore } from "../../_models/nano";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { $numberStore05 } = useNanoStore('nanoNumber05');
	const store = useStore($numberStore05);
	const { $numberStore06 } = useNanoStore('nanoNumber06');

	watch(
		() => store.value,
		() => {
			if (!store.value) return;

			$numberStore05.set(store.value + 1);
			if (store.value === dragRaceMax) {
				$numberStore05.set(0);
				$numberStore06.set(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
