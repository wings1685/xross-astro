<script setup lang="ts">
	import { reactive, ref, shallowRef, triggerRef, watch } from "vue";
	import { recordFinished, recordStart } from "@/_global/lib/performance02";
	import type { ReactiveTypeProps } from "@/_global/types/performance02";

	const props = defineProps<ReactiveTypeProps>();

	const initialValues = {
		dummy01a: 0,
		dummy01b: 0,
		dummy01c: 0,
		dummy01d: 0,
		dummy01e: 0,
		dummy01f: 0,
		dummy01g: 0,
		dummy01h: 0,
		dummy01i: 0,
		dummy01j: 0,
		dummy01k: 0,
		dummy01l: 0,
		dummy01m: 0,
		dummy01n: 0,
		dummy01o: 0,
		dummy01p: 0,
		dummy01q: 0,
		dummy01r: 0,
		dummy01s: 0,
		dummy01t: 0,
		dummy01u: 0,
		dummy01v: 0,
		dummy01w: 0,
		dummy01x: 0,
		dummy01y: 0,
		active01z: 0,
	};

	const dataRef = ref(initialValues);
	const dataReactive = reactive(initialValues);
	const dataShallowRef = shallowRef(initialValues);

	watch(
		() => props.start,
		() => {
			if (!props.start) return;

			recordStart('Flags');
			dataRef.value.active01z = props.start;

			recordStart('FlagsReactive');
			dataReactive.active01z = props.start;

			recordStart('FlagsShallowRef');
			dataShallowRef.value.active01z = props.start;
			triggerRef(dataShallowRef);
		},
		{ immediate: true }
	);

	watch(
		() => dataRef.value.active01z,
		() => {
			if (!dataRef.value.active01z) return;

			recordFinished('Flags', 'FlagsRef');
		},
		{ immediate: true }
	);

	watch(
		() => dataReactive.active01z,
		() => {
			if (!dataReactive.active01z) return;

			recordFinished('FlagsReactive');
		},
		{ immediate: true }
	);

	watch(
		() => dataShallowRef.value.active01z,
		() => {
			if (!dataShallowRef.value.active01z) return;

			recordFinished('FlagsShallowRef');
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
