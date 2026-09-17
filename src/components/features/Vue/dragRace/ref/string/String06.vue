<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore06, setNumber06 } = useStore('vueString06');
	const { setNumber07 } = useStore('vueString07');

	watch(
		() => stringStore06(),
		() => {
			const value = +stringStore06();
			if (!value) return;

			setNumber06((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber06('');
				setNumber07('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
