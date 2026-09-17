<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore07, setNumber07 } = useStore('vueString07');
	const { setNumber08 } = useStore('vueString08');

	watch(
		() => stringStore07(),
		() => {
			const value = +stringStore07();
			if (!value) return;

			setNumber07((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber07('');
				setNumber08('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
