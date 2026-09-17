/** @jsxImportSource react */

import { useEffect, useMemo, useRef, useState } from "react"
import { recordFinished, recordStart } from "@/_global/lib/performance02";

export default function Receipt() {
	const [ amount, setAmount ] = useState(0);

	const quantity = 2;

	const elTotal = useRef<HTMLSpanElement | null>(null);

	const subTotal = useMemo(() => {
		return amount * quantity;
	}, [ amount ]);

	const tax = useMemo(() => {
		return subTotal / 10;
	}, [ subTotal ]);

	const total = useMemo(() => {
		return subTotal + tax;
	}, [ subTotal, tax ]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		recordStart('Receipt');
		setAmount(+e.currentTarget.value);
	};

	useEffect(() => {
		if (elTotal.current?.textContent !== total.toString()) return;

		recordFinished('Receipt');
	}, [ total ]);

	return (
		<>
			<fieldset>
				<span>金額</span>
				<input type="number" value={ amount } onChange={ handleChange } />
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
				<span ref={ elTotal }>{ total }</span>
			</fieldset>
		</>
	)
}
