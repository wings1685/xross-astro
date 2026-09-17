<script setup lang="ts">
	import { ref, watch } from "vue";
	import { recordStart, recordFinished, logEffect } from "@/_global/lib/performance04";
	import { useStore } from "@/_global/piquo";

	const { vueRaceId, vueSetRaceId } = useStore('vueRaceId');

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

	let num = 0;

	watch(
		() => vueRaceId(),
		() => {
			if (vueRaceId() !== 'Effect') return;

			recordStart('Effect');
			state01.value = num + 1;
		},
		{ immediate: true }
	);
	watch(
		() => state01.value,
		() => {
			if (!state01.value) return;

			logEffect();
			state02.value = state01.value;
		},
		{ immediate: true }
	);
	watch(
		() => state02.value,
		() => {
			if (!state02.value) return;

			logEffect();
			state03.value = state02.value;
		},
		{ immediate: true }
	);
	watch(
		() => state03.value,
		() => {
			if (!state03.value) return;

			logEffect();
			state04.value = state03.value;
		},
		{ immediate: true }
	);
	watch(
		() => state04.value,
		() => {
			if (!state04.value) return;

			logEffect();
			state05.value = state04.value;
		},
		{ immediate: true }
	);
	watch(
		() => state05.value,
		() => {
			if (!state05.value) return;

			logEffect();
			state06.value = state05.value;
		},
		{ immediate: true }
	);
	watch(
		() => state06.value,
		() => {
			if (!state06.value) return;

			logEffect();
			state07.value = state06.value;
		},
		{ immediate: true }
	);
	watch(
		() => state07.value,
		() => {
			if (!state07.value) return;

			logEffect();
			state08.value = state07.value;
		},
		{ immediate: true }
	);
	watch(
		() => state08.value,
		() => {
			if (!state08.value) return;

			logEffect();
			state09.value = state08.value;
		},
		{ immediate: true }
	);
	watch(
		() => state09.value,
		() => {
			if (!state09.value) return;

			logEffect();
			state10.value = state09.value;
		},
		{ immediate: true }
	);
	watch(
		() => state10.value,
		() => {
			if (!state10.value) return;

			logEffect();
			recordFinished('Effect');
			num++;
			vueSetRaceId('Props');
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
