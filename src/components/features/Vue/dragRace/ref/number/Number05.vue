<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore05, setNumber05 } = useStore('vueNumber05');
	const { setNumber06 } = useStore('vueNumber06');

	watch(
		() => numberStore05(),
		() => {
			if (!numberStore05()) return;

			setNumber05(numberStore05() + 1);
			if (numberStore05() === dragRaceMax) {
				setNumber05(0);
				setNumber06(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
