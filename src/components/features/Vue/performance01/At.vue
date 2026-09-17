<script setup lang="ts">
	import { useTemplateRef, watch } from "vue";
	import { useStore } from "@/_global/piquo";
	import { recordStart, recordFinished } from "@/_global/lib/performance01";

	type Props = {
		id: string;
	};
	const props = defineProps<Props>();

	const { vueAtId, vueSetAtId } = useStore('vueAtId');

	const el = useTemplateRef('el');

	watch(
		() => vueAtId(),
		() => {
			if (!el || !el.value || props.id !== vueAtId()) return;

			el.value.scrollIntoView({ behavior: 'smooth' });
			recordFinished('GlobalSignal');
			vueSetAtId('');
			recordStart('Hydration');
		},
		{ immediate: true }
	);
</script>
<template>
	<span ref="el" :id="`at_${id}`" class="invisible_target"></span>
</template>
