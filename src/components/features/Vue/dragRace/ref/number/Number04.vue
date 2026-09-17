<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore04, setNumber04 } = useStore('vueNumber04');
	const { setNumber05 } = useStore('vueNumber05');

	watch(
		() => numberStore04(),
		() => {
			if (!numberStore04()) return;

			setNumber04(numberStore04() + 1);
			if (numberStore04() === dragRaceMax) {
				setNumber04(0);
				setNumber05(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
