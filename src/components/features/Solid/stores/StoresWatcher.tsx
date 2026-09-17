import { useStore } from "@/_global/piquo";

export default function SolidStoresWatcher() {
	const { solidQuery } = useStore('solidQuery');
	const { solidIsChecked } = useStore('solidIsChecked');

	return (
		<div>
			<p>
				<span>Solid Store = </span>
				{ solidQuery() } / { solidIsChecked().toString() }
			</p>
		</div>
	)
}
