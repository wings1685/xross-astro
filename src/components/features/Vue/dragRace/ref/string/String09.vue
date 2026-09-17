<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore09, setNumber09 } = useStore('vueString09');
	const { setNumber10 } = useStore('vueString10');

	watch(
		() => stringStore09(),
		() => {
			const value = +stringStore09();
			if (!value) return;

			setNumber09((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber09('');
				setNumber10('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
