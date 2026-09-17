<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax, recordFinished } from "@/_global/lib/dragRace";

	const { numberStore10, setNumber10 } = useStore('vueNumber10');
	const { setStart } = useStore('vueStart');

	watch(
		() => numberStore10(),
		() => {
			if (!numberStore10()) return;

			if (numberStore10() === dragRaceMax) {
				recordFinished('VueRefNumber');
				setNumber10(0);
				setStart('string');
			} else {
				setNumber10(numberStore10() + 1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
