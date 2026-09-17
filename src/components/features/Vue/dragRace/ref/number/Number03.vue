<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore03, setNumber03 } = useStore('vueNumber03');
	const { setNumber04 } = useStore('vueNumber04');

	watch(
		() => numberStore03(),
		() => {
			if (!numberStore03()) return;

			setNumber03(numberStore03() + 1);
			if (numberStore03() === dragRaceMax) {
				setNumber03(0);
				setNumber04(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
