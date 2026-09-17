import { createEffect, createSignal, Index, onMount } from "solid-js";
import { picKeys, recordStart, recordFinished } from "@/_global/lib/performance01";
import { Pic } from "./";

export default function Pics() {
	const [ text, setText ] = createSignal('');

	let elParagraph: HTMLParagraphElement | undefined;

	onMount(() => {
		recordFinished('Hydration');
	});
	const handleChange = (e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement; }) => {
		recordStart('ReRender');
		setText(e.currentTarget.value);
	};
	createEffect(() => {
		if (elParagraph?.textContent !== text()) return;

		recordFinished('ReRender');
	});

	return (
		<form id="pics">
			<fieldset>
				<input type="text" onChange={ handleChange } />
			</fieldset>
			<Index each={ picKeys }>
				{picKey => (
					<Pic picKey={ picKey() } />
				)}
			</Index>
			<fieldset>
				<p ref={ elParagraph }>{ text() }</p>
			</fieldset>
		</form>
	)
}
