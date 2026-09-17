<script setup lang="ts">
	import { computed, ref, useTemplateRef, watchEffect } from "vue";
	import { recordFinished, recordStart } from "@/_global/lib/performance02";

	const amount = ref(0);
	const elTotal = useTemplateRef('elTotal');

	const quantity = 2;

	const subTotal = computed(() => amount.value * quantity);

	const tax = computed(() => subTotal.value / 10);

	const total = computed(() => subTotal.value + tax.value);

	const handleChange = async (e: Event) => {
		if (!e.currentTarget || !(e.currentTarget instanceof HTMLInputElement)) return;

		recordStart('Receipt');
		amount.value = +e.currentTarget.value;
	};

	watchEffect(() => {
		if (elTotal.value?.textContent !== total.value.toString()) return;

		recordFinished('Receipt');
	}, { flush: 'post' });
</script>
<template>
	<fieldset>
		<span>金額</span>
		<input type="number" :value="amount" @change="handleChange" />
	</fieldset>
	<fieldset>
		<span>小計</span>
		<span>{{ subTotal }}</span>
	</fieldset>
	<fieldset>
		<span>消費税</span>
		<span>{{ tax }}</span>
	</fieldset>
	<fieldset>
		<span>合計</span>
		<span ref="elTotal">{{ total }}</span>
	</fieldset>
</template>
