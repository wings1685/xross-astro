<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { startStore } = useStore('vueStart');
	const { numberStore01, setNumber01 } = useStore('vueNumber01');
	const { setNumber02 } = useStore('vueNumber02');

	watch(
		() => startStore(),
		() => {
			if (startStore() !== 'number') return;

			recordStart('VueRefNumber');
			setNumber01(1);
		}, { flush: 'pre' }
	);

	watch(
		() => numberStore01(),
		() => {
			if (!numberStore01()) return;

			setNumber01(numberStore01() + 1);
			if (numberStore01() === dragRaceMax) {
				setNumber01(0);
				setNumber02(1);
			}
		}, { flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
