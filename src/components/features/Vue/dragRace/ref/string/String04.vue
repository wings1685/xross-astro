<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore04, setNumber04 } = useStore('vueString04');
	const { setNumber05 } = useStore('vueString05');

	watch(
		() => stringStore04(),
		() => {
			const value = +stringStore04();
			if (!value) return;

			setNumber04((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber04('');
				setNumber05('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
