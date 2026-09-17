<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore03, setNumber03 } = useStore('vueString03');
	const { setNumber04 } = useStore('vueString04');

	watch(
		() => stringStore03(),
		() => {
			const value = +stringStore03();
			if (!value) return;

			setNumber03((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber03('');
				setNumber04('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
