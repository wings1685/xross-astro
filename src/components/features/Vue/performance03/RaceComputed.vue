<script setup lang="ts">
	import { computed, watch } from "vue";
	import { recordStart, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { vueRaceNo } = useStore('vueRaceNo');

	const state01 = computed(() => {
		if (!vueRaceNo()) return;

		recordStart('RaceComputedState');
		return vueRaceNo() + 1;
	});
	const state02 = computed(() => {
		if (!state01.value) return;

		return state01.value;
	});
	const state03 = computed(() => {
		if (!state02.value) return;

		return state02.value;
	});
	const state04 = computed(() => {
		if (!state03.value) return;

		return state03.value;
	});
	const state05 = computed(() => {
		if (!state04.value) return;

		return state04.value;
	});
	const state06 = computed(() => {
		if (!state05.value) return;

		return state05.value;
	});
	const state07 = computed(() => {
		if (!state06.value) return;

		return state06.value;
	});
	const state08 = computed(() => {
		if (!state07.value) return;

		return state07.value;
	});
	const state09 = computed(() => {
		if (!state08.value) return;

		return state08.value;
	});
	const state10 = computed(() => {
		if (!state09.value) return;

		return state09.value;
	});
	const finished = computed(() => {
		if (!state10.value) return;

		recordFinished('RaceComputedState');

		return state10.value;
	});
	watch(() => finished.value, () => {});
</script>
<template>
	<!-- return null -->
</template>
