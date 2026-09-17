<script setup lang="ts">
	import { ref, shallowRef, triggerRef, watch } from "vue";
	import { recordFinished, recordStart } from "@/_global/lib/performance02";
	import type { ReactiveTypeProps } from "@/_global/types/performance02";

	const props = defineProps<ReactiveTypeProps>();

	const initialValue = 0;

	const dataRef = ref(initialValue);
	const dataShallowRef = shallowRef({ data: initialValue });

	watch(
		() => props.start,
		() => {
			if (!props.start) return;

			recordStart('Primitive');
			dataRef.value = props.start;

			recordStart('PrimitiveShallowRef');
			dataShallowRef.value.data = props.start;
			triggerRef(dataShallowRef);
		},
		{ immediate: true }
	);

	watch(
		() => dataRef.value,
		() => {
			if (!dataRef.value) return;

			recordFinished('Primitive', 'PrimitiveRef');
		},
		{ immediate: true }
	);

	watch(
		() => dataShallowRef.value.data,
		() => {
			if (!dataShallowRef.value.data) return;

			recordFinished('PrimitiveShallowRef');
		},
		{ immediate: true }
	);
</script>
<template>
	<!-- return null -->
</template>
