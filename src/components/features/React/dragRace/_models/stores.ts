/** @jsxImportSource react */

import { _uSESStores } from "./uSES";
import { _jotaiStores } from "./jotai";
import { _legendStores } from "./legend";
import { _valtioStores } from "./valtio";
import { _nanoStores } from "./nano";

const allStores = {
	..._uSESStores,
	..._jotaiStores,
	..._legendStores,
	..._valtioStores,
	..._nanoStores,
} as const;
export type AllStores = typeof allStores;
export type AllStoreKeys = keyof AllStores;

const createServerStore = (key: AllStoreKeys): AllStores[typeof key]['server'] => allStores[key].server;

type CreateClientStore = ReturnType<AllStores[AllStoreKeys]['client']>;
const createClientStore = (key: AllStoreKeys): CreateClientStore => allStores[key].client();

type ClientStoreInstance = Record<AllStoreKeys, CreateClientStore | null>;
const clientStoreInstance = Object.fromEntries(Object.keys(allStores).map(key => ([ key, null ]))) as ClientStoreInstance;

export const useReactStore = <K extends AllStoreKeys, R extends ReturnType<AllStores[K]['client']>>(key: K) => {
	if (typeof window === 'undefined') return createServerStore(key) as R;

	if (!clientStoreInstance[key]) {
		clientStoreInstance[key] = createClientStore(key);
	}

	return clientStoreInstance[key] as R;
};
