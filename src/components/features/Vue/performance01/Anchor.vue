<script setup lang="ts">
	import { useStore } from "@/_global/piquo";
	import { recordStart } from "@/_global/lib/performance01";

	type Props = {
		to: string;
	};
	const props = defineProps<Props>();
	const { vueSetAtId } = useStore('vueAtId');

	const handleClick = () => {
		recordStart('GlobalSignal');
		vueSetAtId(props.to);
	};
</script>
<template>
	<button @click="handleClick">
		<slot />
	</button>
</template>
