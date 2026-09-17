<script setup lang="ts">
	import { computed, watch } from "vue";
	import { recordStart, recordFinished, logMemo } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueRaceId, vueSetRaceId } = useStore('vueRaceId');

	let num = 0;

	const state01 = computed(() => {
		if (vueRaceId() !== 'Memo') return 0;
		recordStart('Memo');
		return num + 1;
	});
	const state02 = computed(() => {
		if (!state01.value) return;

		logMemo();
		return state01.value;
	});
	const state03 = computed(() => {
		if (!state02.value) return;

		logMemo();
		return state02.value;
	});
	const state04 = computed(() => {
		if (!state03.value) return;

		logMemo();
		return state03.value;
	});
	const state05 = computed(() => {
		if (!state04.value) return;

		logMemo();
		return state04.value;
	});
	const state06 = computed(() => {
		if (!state05.value) return;

		logMemo();
		return state05.value;
	});
	const state07 = computed(() => {
		if (!state06.value) return;

		logMemo();
		return state06.value;
	});
	const state08 = computed(() => {
		if (!state07.value) return;

		logMemo();
		return state07.value;
	});
	const state09 = computed(() => {
		if (!state08.value) return;

		logMemo();
		return state08.value;
	});
	const state10 = computed(() => {
		if (!state09.value) return;

		logMemo();
		return state09.value;
	});
	const finished = computed(() => {
		if (!state10.value) return;

		logMemo();
		recordFinished('Memo');
		return state10.value;
	});
	watch(
		() => finished.value,
		() => {
			if (!finished.value) return;

			num = finished.value;
			vueSetRaceId('Store');
		}
	);
</script>
<template>
	<!-- return null -->
</template>
