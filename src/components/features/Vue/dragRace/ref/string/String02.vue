<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore02, setNumber02 } = useStore('vueString02');
	const { setNumber03 } = useStore('vueString03');

	watch(
		() => stringStore02(),
		() => {
			const value = +stringStore02();
			if (!value) return;

			setNumber02((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber02('');
				setNumber03('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
