<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore02, setNumber02 } = useStore('vueNumber02');
	const { setNumber03 } = useStore('vueNumber03');

	watch(
		() => numberStore02(),
		() => {
			if (!numberStore02()) return;

			setNumber02(numberStore02() + 1);
			if (numberStore02() === dragRaceMax) {
				setNumber02(0);
				setNumber03(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
