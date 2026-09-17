import { atom } from "nanostores";

type Store = number;
const initialValue: Store = 0;

const serverStore = {
	get value() { return initialValue },
	set: (newValue: number) => {},
	eq: (oldValue: number | undefined, newValue: number) => false,
	get: () =>  initialValue,
	get init() { return initialValue },
	get lc() { return initialValue },
	listen: (listener: (value: number, oldValue: number | undefined) => void) => () => {},
	notify: (oldValue?: number | undefined) => {},
	off: () => {},
	subscribe: (listener: (value: number, oldValue?: number | undefined) => void) => () => {},
};

const nanoStore01 = {
	server: { $store01: serverStore },
	client: () => {
		const $store01 = atom(initialValue);

		return { $store01 };
	},
};
const nanoStore02 = {
	server: { $store02: serverStore },
	client: () => {
		const $store02 = atom(initialValue);

		return { $store02 };
	},
};
const nanoStore03 = {
	server: { $store03: serverStore },
	client: () => {
		const $store03 = atom(initialValue);

		return { $store03 };
	},
};
const nanoStore04 = {
	server: { $store04: serverStore },
	client: () => {
		const $store04 = atom(initialValue);

		return { $store04 };
	},
};
const nanoStore05 = {
	server: { $store05: serverStore },
	client: () => {
		const $store05 = atom(initialValue);

		return { $store05 };
	},
};
const nanoStore06 = {
	server: { $store06: serverStore },
	client: () => {
		const $store06 = atom(initialValue);

		return { $store06 };
	},
};
const nanoStore07 = {
	server: { $store07: serverStore },
	client: () => {
		const $store07 = atom(initialValue);

		return { $store07 };
	},
};
const nanoStore08 = {
	server: { $store08: serverStore },
	client: () => {
		const $store08 = atom(initialValue);

		return { $store08 };
	},
};
const nanoStore09 = {
	server: { $store09: serverStore },
	client: () => {
		const $store09 = atom(initialValue);

		return { $store09 };
	},
};
const nanoStore10 = {
	server: { $store10: serverStore },
	client: () => {
		const $store10 = atom(initialValue);

		return { $store10 };
	},
};

const nanoStores = {
	store01: nanoStore01,
	store02: nanoStore02,
	store03: nanoStore03,
	store04: nanoStore04,
	store05: nanoStore05,
	store06: nanoStore06,
	store07: nanoStore07,
	store08: nanoStore08,
	store09: nanoStore09,
	store10: nanoStore10,
} as const;
export type NanoStores = typeof nanoStores;
export type NanoStoreKeys = keyof NanoStores;

const createServerStore = (key: NanoStoreKeys): NanoStores[typeof key]['server'] => nanoStores[key].server;

type CreateClientStore = ReturnType<NanoStores[NanoStoreKeys]['client']>;
const createClientStore = (key: NanoStoreKeys): CreateClientStore => nanoStores[key].client();

type ClientStoreInstance = Record<NanoStoreKeys, CreateClientStore | null>;
const clientStoreInstance = Object.fromEntries(Object.keys(nanoStores).map(key => ([ key, null ]))) as ClientStoreInstance;

export const useNanoStore = <K extends NanoStoreKeys, R extends ReturnType<NanoStores[K]['client']>>(key: K) => {
	if (typeof window === 'undefined') return createServerStore(key) as R;

	if (!clientStoreInstance[key]) {
		clientStoreInstance[key] = createClientStore(key);
	}

	return clientStoreInstance[key] as R;
};
