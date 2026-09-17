<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore05, setNumber05 } = useStore('vueString05');
	const { setNumber06 } = useStore('vueString06');

	watch(
		() => stringStore05(),
		() => {
			const value = +stringStore05();
			if (!value) return;

			setNumber05((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber05('');
				setNumber06('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
