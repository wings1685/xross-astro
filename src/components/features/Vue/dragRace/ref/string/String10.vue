<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax, recordFinished, logTotal } from "@/_global/lib/dragRace";

	const { stringStore10, setNumber10 } = useStore('vueString10');
	const { setStart } = useStore('vueStart');

	watch(
		() => stringStore10(),
		() => {
			const value = +stringStore10();
			if (!value) return;

			if (value === dragRaceMax) {
				recordFinished('VueRefString');
				logTotal('VueRef');
				setStart(null);
				setNumber10('');
			} else {
				setNumber10((value + 1).toString());
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
