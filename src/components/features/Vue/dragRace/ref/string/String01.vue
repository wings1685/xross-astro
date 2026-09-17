<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart, dragRaceMax } from "@/_global/lib/dragRace";

	const { startStore } = useStore('vueStart');
	const { stringStore01, setNumber01 } = useStore('vueString01');
	const { setNumber02 } = useStore('vueString02');

	watch(
		() => startStore(),
		() => {
			if (startStore() !== 'string') return;

			recordStart('VueRefString');
			setNumber01('1');
		}, { flush: 'pre' }
	);

	watch(
		() => stringStore01(),
		() => {
			const value = +stringStore01();
			if (!value) return;

			setNumber01((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber01('');
				setNumber02('1');
			}
		}, { flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
