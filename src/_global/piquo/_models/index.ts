import { _solidIsChecked } from "./Solid/isChecked";
import { _solidQuery } from "./Solid/query";
import { _solidAtId } from "./Solid/atId";
import { _solidRelay } from "./Solid/relay";
import { _solidRaceNo } from "./Solid/raceNo";
import { _solidQuantum } from "./Solid/quantum";
import { _solidRaceId } from "./Solid/raceId";
import { _solidDragRace } from "./Solid/dragRace";

import { _svelteIsChecked } from "./Svelte/isChecked.svelte";
import { _svelteQuery } from "./Svelte/query.svelte";
import { _svelteAtId } from "./Svelte/atId.svelte";
import { _svelteRaceNo } from "./Svelte/raceNo.svelte";
import { _svelteRelay } from "./Svelte/relay.svelte";
import { _svelteQuantum } from "./Svelte/quantum.svelte";
import { _svelteRaceId } from "./Svelte/raceId.svelte";
import { _svelteDragRace } from "./Svelte/dragRace.svelte";

import { _vueIsChecked } from "./Vue/isChecked";
import { _vueQuery } from "./Vue/query";
import { _vueAtId } from "./Vue/atId";
import { _vueRelay } from "./Vue/relay";
import { _vueRaceNo } from "./Vue/raceNo";
import { _vueQuantum } from "./Vue/quantum";
import { _vueRaceId } from "./Vue/raceId";
import { _vueDragRace } from "./Vue/dragRace";

export const allStores = {
	solidQuery: _solidQuery,
	solidIsChecked: _solidIsChecked,
	solidAtId: _solidAtId,
	solidRelay: _solidRelay,
	solidRaceNo: _solidRaceNo,
	solidQuantum: _solidQuantum,
	solidRaceId: _solidRaceId,
	..._solidDragRace,

	svelteQuery: _svelteQuery,
	svelteIsChecked: _svelteIsChecked,
	svelteAtId: _svelteAtId,
	svelteRelay: _svelteRelay,
	svelteRaceNo: _svelteRaceNo,
	svelteQuantum: _svelteQuantum,
	svelteRaceId: _svelteRaceId,
	..._svelteDragRace,

	vueQuery: _vueQuery,
	vueIsChecked: _vueIsChecked,
	vueAtId: _vueAtId,
	vueRelay: _vueRelay,
	vueRaceNo: _vueRaceNo,
	vueQuantum: _vueQuantum,
	vueRaceId: _vueRaceId,
	..._vueDragRace,
} as const;
export type AllStores = typeof allStores;
export type AllStoreKeys = keyof AllStores;
