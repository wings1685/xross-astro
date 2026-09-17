import { createEffect, createMemo, createSignal } from "solid-js";
import { recordFinished, recordStart } from "@/_global/lib/performance02";

export default function Receipt() {
	const [ amount, setAmount ] = createSignal(0);

	const quantity = 2;

	let elTotal: HTMLSpanElement | undefined;

	const subTotal = createMemo(() => {
		return amount() * quantity;
	});

	const tax = createMemo(() => {
		return subTotal() / 10;
	});

	const total = createMemo(() => {
		return subTotal() + tax();
	});

	const handleChange = (e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement; }) => {
		recordStart('Receipt');
		setAmount(+e.currentTarget.value);
	};

	createEffect(() => {
		if (elTotal?.textContent !== total().toString()) return;

		recordFinished('Receipt');
	});

	return (
		<>
			<fieldset>
				<span>金額</span>
				<input type="number" value={ amount() } onChange={ handleChange } />
			</fieldset>
			<fieldset>
				<span>小計</span>
				<span>{ subTotal() }</span>
			</fieldset>
			<fieldset>
				<span>消費税</span>
				<span>{ tax() }</span>
			</fieldset>
			<fieldset>
				<span>合計</span>
				<span ref={ elTotal }>{ total() }</span>
			</fieldset>
		</>
	)
}
