import { proxy } from "valtio";

type Store = {
	store: number;
};
const initialValue: Store['store'] = 0;
const serverStoreGetter = { store: initialValue };
const serverStoreSetter = (_: Store['store']) => {};

const valtioServerStore01 = { store01: serverStoreGetter, setStore01: serverStoreSetter };
const valtioStore01 = {
	server: () => valtioServerStore01,
	client: () => {
		const store01 = proxy<Store>({ store: 0 });
		const setStore01 = (value: Store['store']) => { store01.store = value; };

		return { store01, setStore01 };
	},
};
const valtioServerStore02 = { store02: serverStoreGetter, setStore02: serverStoreSetter };
const valtioStore02 = {
	server: () => valtioServerStore02,
	client: () => {
		const store02 = proxy<Store>({ store: 0 });
		const setStore02 = (value: Store['store']) => { store02.store = value; };

		return { store02, setStore02 };
	},
};
const valtioServerStore03 = { store03: serverStoreGetter, setStore03: serverStoreSetter };
const valtioStore03 = {
	server: () => valtioServerStore03,
	client: () => {
		const store03 = proxy<Store>({ store: 0 });
		const setStore03 = (value: Store['store']) => { store03.store = value; };

		return { store03, setStore03 };
	},
};
const valtioServerStore04 = { store04: serverStoreGetter, setStore04: serverStoreSetter };
const valtioStore04 = {
	server: () => valtioServerStore04,
	client: () => {
		const store04 = proxy<Store>({ store: 0 });
		const setStore04 = (value: Store['store']) => { store04.store = value; };

		return { store04, setStore04 };
	},
};
const valtioServerStore05 = { store05: serverStoreGetter, setStore05: serverStoreSetter };
const valtioStore05 = {
	server: () => valtioServerStore05,
	client: () => {
		const store05 = proxy<Store>({ store: 0 });
		const setStore05 = (value: Store['store']) => { store05.store = value; };

		return { store05, setStore05 };
	},
};
const valtioServerStore06 = { store06: serverStoreGetter, setStore06: serverStoreSetter };
const valtioStore06 = {
	server: () => valtioServerStore06,
	client: () => {
		const store06 = proxy<Store>({ store: 0 });
		const setStore06 = (value: Store['store']) => { store06.store = value; };

		return { store06, setStore06 };
	},
};
const valtioServerStore07 = { store07: serverStoreGetter, setStore07: serverStoreSetter };
const valtioStore07 = {
	server: () => valtioServerStore07,
	client: () => {
		const store07 = proxy<Store>({ store: 0 });
		const setStore07 = (value: Store['store']) => { store07.store = value; };

		return { store07, setStore07 };
	},
};
const valtioServerStore08 = { store08: serverStoreGetter, setStore08: serverStoreSetter };
const valtioStore08 = {
	server: () => valtioServerStore08,
	client: () => {
		const store08 = proxy<Store>({ store: 0 });
		const setStore08 = (value: Store['store']) => { store08.store = value; };

		return { store08, setStore08 };
	},
};
const valtioServerStore09 = { store09: serverStoreGetter, setStore09: serverStoreSetter };
const valtioStore09 = {
	server: () => valtioServerStore09,
	client: () => {
		const store09 = proxy<Store>({ store: 0 });
		const setStore09 = (value: Store['store']) => { store09.store = value; };

		return { store09, setStore09 };
	},
};
const valtioServerStore10 = { store10: serverStoreGetter, setStore10: serverStoreSetter };
const valtioStore10 = {
	server: () => valtioServerStore10,
	client: () => {
		const store10 = proxy<Store>({ store: 0 });
		const setStore10 = (value: Store['store']) => { store10.store = value; };

		return { store10, setStore10 };
	},
};

const valtioStores = {
	store01: valtioStore01,
	store02: valtioStore02,
	store03: valtioStore03,
	store04: valtioStore04,
	store05: valtioStore05,
	store06: valtioStore06,
	store07: valtioStore07,
	store08: valtioStore08,
	store09: valtioStore09,
	store10: valtioStore10,
} as const;
export type ValtioStores = typeof valtioStores;
export type ValtioStoreKeys = keyof ValtioStores;

const createServerStore = (key: ValtioStoreKeys): ValtioStores[typeof key]['server'] => valtioStores[key].server;

type CreateClientStore = ReturnType<ValtioStores[ValtioStoreKeys]['client']>;
const createClientStore = (key: ValtioStoreKeys): CreateClientStore => valtioStores[key].client();

type ClientStoreInstance = Record<ValtioStoreKeys, CreateClientStore | null>;
const clientStoreInstance = Object.fromEntries(Object.keys(valtioStores).map(key => ([ key, null ]))) as ClientStoreInstance;

export const useValtioStore = <K extends ValtioStoreKeys, R extends ReturnType<ValtioStores[K]['client']>>(key: K) => {
	if (typeof window === 'undefined') return createServerStore(key) as R;

	if (!clientStoreInstance[key]) {
		clientStoreInstance[key] = createClientStore(key);
	}

	return clientStoreInstance[key] as R;
};
