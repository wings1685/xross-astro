<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore09, setNumber09 } = useStore('vueNumber09');
	const { setNumber10 } = useStore('vueNumber10');

	watch(
		() => numberStore09(),
		() => {
			if (!numberStore09()) return;

			setNumber09(numberStore09() + 1);
			if (numberStore09() === dragRaceMax) {
				setNumber09(0);
				setNumber10(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
