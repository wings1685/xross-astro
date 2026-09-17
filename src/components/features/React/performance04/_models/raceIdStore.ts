/** @jsxImportSource react */

type Store = 'Effect' | 'Props' | 'Context' | 'Memo' | 'Store' | null;
const initialValue: Store = null;
type Listener = () => void;

const serverStore = {
	subscribe(_: Listener) {},
	getServerSnapshot() { return initialValue; },
	getSnapshot() { return initialValue; },
	setStore(_: Store) {},
};
const clientStore = () => {
	let store: Store = initialValue;
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
const raceIdStore = { server: serverStore, client: clientStore };
export const _raceIdStores = {
	raceId: raceIdStore,
};
