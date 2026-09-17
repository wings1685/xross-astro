<script setup lang="ts">
	import { watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { dragRaceMax } from "@/_global/lib/dragRace";

	const { stringStore08, setNumber08 } = useStore('vueString08');
	const { setNumber09 } = useStore('vueString09');

	watch(
		() => stringStore08(),
		() => {
			const value = +stringStore08();
			if (!value) return;

			setNumber08((value + 1).toString());
			if (value === dragRaceMax) {
				setNumber08('');
				setNumber09('1');
			}
		},
		{ flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
