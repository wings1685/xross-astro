/** @jsxImportSource react */

type Store = number;
const initialValue: Store = 0;
type Listener = () => void;

const serverStore = {
	subscribe(_: Listener) {},
	getServerSnapshot() { return initialValue; },
	getSnapshot() { return initialValue; },
	setStore(_: Store) {},
};
const clientStore = () => {
	let store = initialValue;
	let listeners: Listener[] = [];
	const subscribe = (listener: Listener) => {
		listeners = [...listeners, listener];

		return () => {
			listeners = listeners.filter(l => l !== listener);
		};
	};
	const getServerSnapshot = () => initialValue;
	const getSnapshot = () => store;
	const setStore = (value: Store) => {
		store = value;

		for (let listener of listeners) {
			listener();
		}
	};

	return { subscribe, getServerSnapshot, getSnapshot, setStore };
};
const contextStartStore = { server: serverStore, client: clientStore };
const quantumStartStore = { server: serverStore, client: clientStore };
const quantum01Store = { server: serverStore, client: clientStore };
const quantum02Store = { server: serverStore, client: clientStore };
const quantum03Store = { server: serverStore, client: clientStore };
const quantum04Store = { server: serverStore, client: clientStore };
const quantum05Store = { server: serverStore, client: clientStore };
const quantum06Store = { server: serverStore, client: clientStore };
const quantum07Store = { server: serverStore, client: clientStore };
const quantum08Store = { server: serverStore, client: clientStore };
const quantum09Store = { server: serverStore, client: clientStore };
const quantum10Store = { server: serverStore, client: clientStore };
export const _quantumStores = {
	contextStart: contextStartStore,
	quantumStart: quantumStartStore,
	quantum01: quantum01Store,
	quantum02: quantum02Store,
	quantum03: quantum03Store,
	quantum04: quantum04Store,
	quantum05: quantum05Store,
	quantum06: quantum06Store,
	quantum07: quantum07Store,
	quantum08: quantum08Store,
	quantum09: quantum09Store,
	quantum10: quantum10Store,
};
