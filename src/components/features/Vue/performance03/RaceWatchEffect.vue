<script setup lang="ts">
	import { ref, watchEffect } from "vue";
	import { recordStart, recordFinished } from "@/_global/lib/performance03";
	import { useStore } from "@/_global/piquo";

	const { vueRaceNo } = useStore('vueRaceNo');
	const state01 = ref(0);
	const setState01 = (value: number) => { state01.value = value; };
	const state02 = ref(0);
	const setState02 = (value: number) => { state02.value = value; };
	const state03 = ref(0);
	const setState03 = (value: number) => { state03.value = value; };
	const state04 = ref(0);
	const setState04 = (value: number) => { state04.value = value; };
	const state05 = ref(0);
	const setState05 = (value: number) => { state05.value = value; };
	const state06 = ref(0);
	const setState06 = (value: number) => { state06.value = value; };
	const state07 = ref(0);
	const setState07 = (value: number) => { state07.value = value; };
	const state08 = ref(0);
	const setState08 = (value: number) => { state08.value = value; };
	const state09 = ref(0);
	const setState09 = (value: number) => { state09.value = value; };
	const state10 = ref(0);
	const setState10 = (value: number) => { state10.value = value; };

	watchEffect(
		() => {
			if (!vueRaceNo()) return;

			recordStart('RaceWatchEffectState');
			setState01(vueRaceNo() + 1);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state01.value) return;

			setState02(state01.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state02.value) return;

			setState03(state02.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state03.value) return;

			setState04(state03.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state04.value) return;

			setState05(state04.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state05.value) return;

			setState06(state05.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state06.value) return;

			setState07(state06.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state07.value) return;

			setState08(state07.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state08.value) return;

			setState09(state08.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state09.value) return;

			setState10(state09.value);
		}, { flush: 'pre' }
	);
	watchEffect(
		() => {
			if (!state10.value) return;

			recordFinished('RaceWatchEffectState');
		}, { flush: 'pre' }
	);
</script>
<template>
	<!-- return null -->
</template>
