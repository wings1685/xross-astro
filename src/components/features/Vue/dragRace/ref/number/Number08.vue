<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { numberStore08, setNumber08 } = useStore('vueNumber08');
	const { setNumber09 } = useStore('vueNumber09');

	watch(
		() => numberStore08(),
		() => {
			if (!numberStore08()) return;

			setNumber08(numberStore08() + 1);
			if (numberStore08() === dragRaceMax) {
				setNumber08(0);
				setNumber09(1);
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
