<script lang="ts">
	import { recordFinished, recordStart } from "@/_global/lib/performance02";

	let amount = $state(0);

	const quantity = 2;

	let elTotal: HTMLSpanElement | undefined;

	const subTotal = $derived(amount * quantity);

	const tax = $derived(subTotal / 10);

	const total = $derived(subTotal + tax);

	const handleChange = async (e: Event & { currentTarget: EventTarget & HTMLInputElement; }) => {
		recordStart('Receipt');
		amount = +e.currentTarget.value;
	};

	$effect(() => {
		if (elTotal?.textContent !== total.toString()) return;

		recordFinished('Receipt');
	});
</script>
<fieldset>
	<span>金額</span>
	<input type="number" value={ amount } onchange={ handleChange } />
</fieldset>
<fieldset>
	<span>小計</span>
	<span>{ subTotal }</span>
</fieldset>
<fieldset>
	<span>消費税</span>
	<span>{ tax }</span>
</fieldset>
<fieldset>
	<span>合計</span>
	<span bind:this={ elTotal }>{ total }</span>
</fieldset>
