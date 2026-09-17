import { createSignal } from "solid-js";
import { Flags, NestObject, Primitive } from "./";

export default function ReactiveTypes() {
	const [ start, setStart ] = createSignal(0);

	const handleClick = () => {
		setStart(start() + 1);
	};

	return (
		<>
			<fieldset>
				<button onClick={ handleClick }>リアクティブ構造差の計測開始</button>
			</fieldset>
			<Primitive start={ start() } />
			<NestObject start={ start() } />
			<Flags start={ start() } />
		</>
	)
};
