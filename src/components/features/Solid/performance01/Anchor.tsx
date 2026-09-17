import { useStore } from "@/_global/piquo";
import { recordStart } from "@/_global/lib/performance01";
import type { JSX } from "solid-js/jsx-runtime";

type Props = {
	to: string;
	children: JSX.Element;
};

export default function Anchor(props: Props) {
	const { solidSetAtId } = useStore('solidAtId');

	const handleClick = () => {
		recordStart('GlobalSignal');
		solidSetAtId(props.to);
	};

	return (
		<button onClick={ handleClick }>
			{ props.children }
		</button>
	)
};
