<script setup lang="ts">
	import { ref, watch } from "vue";
	import { recordStart, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { vueRaceNo } = useStore('vueRaceNo');
	const state01 = ref(0);
	const state02 = ref(0);
	const state03 = ref(0);
	const state04 = ref(0);
	const state05 = ref(0);
	const state06 = ref(0);
	const state07 = ref(0);
	const state08 = ref(0);
	const state09 = ref(0);
	const state10 = ref(0);

	watch(
		() => vueRaceNo(),
		() => {
			if (!vueRaceNo()) return;

			recordStart('RaceWatchState');
			state01.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state01.value,
		() => {
			if (!state01.value) return;

			state02.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state02.value,
		() => {
			if (!state02.value) return;

			state03.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state03.value,
		() => {
			if (!state03.value) return;

			state04.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state04.value,
		() => {
			if (!state04.value) return;

			state05.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state05.value,
		() => {
			if (!state05.value) return;

			state06.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state06.value,
		() => {
			if (!state06.value) return;

			state07.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state07.value,
		() => {
			if (!state07.value) return;

			state08.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state08.value,
		() => {
			if (!state08.value) return;

			state09.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state09.value,
		() => {
			if (!state09.value) return;

			state10.value++;
		},
		{ immediate: true }
	);
	watch(
		() => state10.value,
		() => {
			if (!state10.value) return;

			recordFinished('RaceWatchState');
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
