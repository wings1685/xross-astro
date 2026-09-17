<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore06, setNumber06 } = useStore('vueNumber06');
	const { setNumber07 } = useStore('vueNumber07');

	watch(
		() => numberStore06(),
		() => {
			if (!numberStore06()) return;

			setNumber06(numberStore06() + 1);
			if (numberStore06() === dragRaceMax) {
				setNumber06(0);
				setNumber07(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
