<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore07, setNumber07 } = useStore('vueNumber07');
	const { setNumber08 } = useStore('vueNumber08');

	watch(
		() => numberStore07(),
		() => {
			if (!numberStore07()) return;

			setNumber07(numberStore07() + 1);
			if (numberStore07() === dragRaceMax) {
				setNumber07(0);
				setNumber08(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
