<script setup lang="ts">
	import { onMounted, ref, useTemplateRef, watchEffect } from "vue";
	import { picKeys, recordStart, recordFinished } from "@/_global/lib/performance01";
	import { Pic } from "./";

	const text = ref('');
	const elParagraph = useTemplateRef('elParagraph');

	onMounted(() => {
		recordFinished('Hydration');
	});
	const handleChange = async (e: Event) => {
		if (!e.currentTarget || !(e.currentTarget instanceof HTMLInputElement)) return;

		recordStart('ReRender');
		text.value = e.currentTarget.value;
	};
	watchEffect(() => {
		if (elParagraph.value?.textContent !== text.value) return;

		recordFinished('ReRender');
	}, { flush: 'post' });
</script>
<template>
	<form id="pics">
		<fieldset>
			<input type="text" @change="handleChange" />
		</fieldset>
		<Pic v-for="key in picKeys" :key="key" :pic-key="key" />
		<fieldset>
			<p ref="elParagraph">{{ text }}</p>
		</fieldset>
	</form>
</template>
