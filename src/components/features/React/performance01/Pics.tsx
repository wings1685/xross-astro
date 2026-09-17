/** @jsxImportSource react */

import { memo, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { picKeys, recordStart, recordFinished, records } from "@/_global/lib/performance01";
import { Pic } from "./";
import type { ReactNode } from "react";

export default function Pics() {
	const [ text, setText ] = useState('');

	const elParagraph = useRef<HTMLParagraphElement | null>(null);

	useEffect(() => {
		recordFinished('Hydration');
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
		recordStart('ReRender');
		setText(e.currentTarget.value);
	};

	useEffect(() => {
		if (!elParagraph || !elParagraph.current) return;

		if (elParagraph.current.textContent === text) recordFinished('ReRender');
	}, [ text ]);

	return (
		<form id="pics">
			<fieldset>
				<input type="text" onChange={ handleChange } />
			</fieldset>
			{picKeys.map(picKey => (
				<Pic key={ picKey } picKey={ picKey } />
			))}
			<fieldset>
				<p ref={ elParagraph }>{ text }</p>
			</fieldset>
		</form>
	)
}


// const ReactMemoPics = memo(({ keys }: { keys: typeof picKeys }) => {
// 	return (
// 		<>
// 			{keys.map(picKey => (
// 				<Pic key={ picKey } picKey={ picKey } />
// 			))}
// 		</>
// 	);
// });

// export default function Pics() {
// 	const [ text, setText ] = useState('');

// 	const elParagraph = useRef<HTMLParagraphElement | null>(null);

// 	useEffect(() => {
// 		recordFinished('Hydration');
// 	}, []);

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
// 		recordStart('ReRender');
// 		setText(e.currentTarget.value);
// 	};

// 	useEffect(() => {
// 		if (!elParagraph || !elParagraph.current) return;

// 		if (elParagraph.current.textContent === text) recordFinished('ReRender');
// 	}, [ text ]);

// 	return (
// 		<form id="pics">
// 			<fieldset>
// 				<input type="text" onChange={ handleChange } />
// 			</fieldset>
// 			<ReactMemoPics keys={ picKeys } />
// 			<fieldset>
// 				<p ref={ elParagraph }>{ text }</p>
// 			</fieldset>
// 		</form>
// 	)
// }


// export default function Pics() {
// 	const [ text, setText ] = useState('');

// 	const elParagraph = useRef<HTMLParagraphElement | null>(null);

// 	useEffect(() => {
// 		recordFinished('Hydration');
// 	}, []);

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
// 		recordStart('ReRender');
// 		setText(e.currentTarget.value);
// 	};

// 	useEffect(() => {
// 		if (!elParagraph || !elParagraph.current) return;

// 		if (elParagraph.current.textContent === text) recordFinished('ReRender');
// 	}, [ text ]);

// 	const UseMemoPics = useMemo(() => {
// 		return picKeys.map(picKey => (
// 			<Pic key={ picKey } picKey={ picKey } />
// 		));
// 	}, []);

// 	return (
// 		<form id="pics">
// 			<fieldset>
// 				<input type="text" onChange={ handleChange } />
// 			</fieldset>
// 			{ UseMemoPics }
// 			<fieldset>
// 				<p ref={ elParagraph }>{ text }</p>
// 			</fieldset>
// 		</form>
// 	)
// }


// function PicsChildren({ children }: { children: ReactNode }) {
// 	const [ text, setText ] = useState('');

// 	const elParagraph = useRef<HTMLParagraphElement | null>(null);
// 	const startReRender = useRef(0);

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		recordStart('ReRender');
// 		startReRender.current = records.ReRender.start;
// 		setText(e.currentTarget.value);
// 	};

// 	useEffect(() => {
// 		if (!elParagraph || !elParagraph.current) return;

// 		if (elParagraph.current.textContent === text) recordFinished('ReRender');
// 	}, [ text ]);

// 	return (
// 		<form id="pics">
// 			<fieldset>
// 				<input type="text" onChange={ handleChange } />
// 			</fieldset>
// 			{ children }
// 			<fieldset>
// 				<p ref={ elParagraph }>{ text }</p>
// 			</fieldset>
// 		</form>
// 	);
// }

// export default function Pics() {
// 	useEffect(() => {
// 		recordFinished('Hydration');
// 	}, []);

// 	return (
// 		<PicsChildren>
// 			{picKeys.map(picKey => (
// 				<Pic key={ picKey } picKey={ picKey } />
// 			))}
// 		</PicsChildren>
// 	);
// }
