import { observable } from "@legendapp/state";
import type { GetOptions, ListenerFn, TrackingType } from "@legendapp/state";

type Store = number;
const initialValue: Store = 0;

const serverStore = {
	delete: () => {},
	set: (_: Store) => {},
	peek: () => initialValue,
	get: (_?: TrackingType | GetOptions) => initialValue,
	onChange: (cb: ListenerFn<number>, options?: {}) => {},
};
const legendStore01$ = {
	server: () => ({ store01$: serverStore }),
	client: () => {
		const store01$ = observable<Store>(initialValue);

		return { store01$ };
	},
};
const legendStore02$ = {
	server: () => ({ store02$: serverStore }),
	client: () => {
		const store02$ = observable<Store>(initialValue);

		return { store02$ };
	},
};
const legendStore03$ = {
	server: () => ({ store03$: serverStore }),
	client: () => {
		const store03$ = observable<Store>(initialValue);

		return { store03$ };
	},
};
const legendStore04$ = {
	server: () => ({ store04$: serverStore }),
	client: () => {
		const store04$ = observable<Store>(initialValue);

		return { store04$ };
	},
};
const legendStore05$ = {
	server: () => ({ store05$: serverStore }),
	client: () => {
		const store05$ = observable<Store>(initialValue);

		return { store05$ };
	},
};
const legendStore06$ = {
	server: () => ({ store06$: serverStore }),
	client: () => {
		const store06$ = observable<Store>(initialValue);

		return { store06$ };
	},
};
const legendStore07$ = {
	server: () => ({ store07$: serverStore }),
	client: () => {
		const store07$ = observable<Store>(initialValue);

		return { store07$ };
	},
};
const legendStore08$ = {
	server: () => ({ store08$: serverStore }),
	client: () => {
		const store08$ = observable<Store>(initialValue);

		return { store08$ };
	},
};
const legendStore09$ = {
	server: () => ({ store09$: serverStore }),
	client: () => {
		const store09$ = observable<Store>(initialValue);

		return { store09$ };
	},
};
const legendStore10$ = {
	server: () => ({ store10$: serverStore }),
	client: () => {
		const store10$ = observable<Store>(initialValue);

		return { store10$ };
	},
};

const legendStores = {
	store01: legendStore01$,
	store02: legendStore02$,
	store03: legendStore03$,
	store04: legendStore04$,
	store05: legendStore05$,
	store06: legendStore06$,
	store07: legendStore07$,
	store08: legendStore08$,
	store09: legendStore09$,
	store10: legendStore10$,
} as const;
export type LegendStores = typeof legendStores;
export type LegendStoreKeys = keyof LegendStores;

const createServerStore = (key: LegendStoreKeys): LegendStores[typeof key]['server'] => legendStores[key].server;

type CreateClientStore = ReturnType<LegendStores[LegendStoreKeys]['client']>;
const createClientStore = (key: LegendStoreKeys): CreateClientStore => legendStores[key].client();

type ClientStoreInstance = Record<LegendStoreKeys, CreateClientStore | null>;
const clientStoreInstance = Object.fromEntries(Object.keys(legendStores).map(key => ([ key, null ]))) as ClientStoreInstance;

export const useLegendStore = <K extends LegendStoreKeys, R extends ReturnType<LegendStores[K]['client']>>(key: K) => {
	if (typeof window === 'undefined') return createServerStore(key) as R;

	if (!clientStoreInstance[key]) {
		clientStoreInstance[key] = createClientStore(key);
	}

	return clientStoreInstance[key] as R;
};
