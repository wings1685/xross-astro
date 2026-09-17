import { useStore } from "@/_global/piquo";

export default function EditStores() {
	const { solidQuery, solidSetQuery } = useStore('solidQuery');
	const { solidIsChecked, solidSetChecked } = useStore('solidIsChecked');
	const { svelteQuery, svelteSetQuery } = useStore('svelteQuery');
	const { svelteIsChecked, svelteSetChecked } = useStore('svelteIsChecked');
	const { vueQuery, vueSetQuery } = useStore('vueQuery');
	const { vueIsChecked, vueSetChecked } = useStore('vueIsChecked');

	return (
		<div>
			<p>
				<span>(created) Solid = </span>
				<input type="text" value={ solidQuery() } onInput={ e => solidSetQuery(e.currentTarget.value) } />
				<input type="checkbox" checked={ solidIsChecked() } onChange={ e => solidSetChecked(e.currentTarget.checked) } />
			</p>
			<p>
				<span>(created) Svelte = </span>
				<input type="text" value={ svelteQuery() } onInput={ e => svelteSetQuery(e.currentTarget.value) } />
				<input type="checkbox" checked={ svelteIsChecked() } onChange={ e => svelteSetChecked(e.currentTarget.checked) } />
			</p>
			<p>
				<span>(created) Vue = </span>
				<input type="text" value={ vueQuery() } onInput={ e => vueSetQuery(e.currentTarget.value) } />
				<input type="checkbox" checked={ vueIsChecked() } onChange={ e => vueSetChecked(e.currentTarget.checked) } />
			</p>
		</div>
	)
}
