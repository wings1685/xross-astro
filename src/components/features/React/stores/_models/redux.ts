import { createSlice, configureStore } from "@reduxjs/toolkit";

const slice01 = createSlice({
	name: 'store01',
	initialState: { value: 0 },
	reducers: {
		setStore01: (state, action) => { state.value = action.payload; },
	}
});
const slice02 = createSlice({
	name: 'store02',
	initialState: { value: 0 },
	reducers: {
		setStore02: (state, action) => { state.value = action.payload; },
	}
});
const slice03 = createSlice({
	name: 'store03',
	initialState: { value: 0 },
	reducers: {
		setStore03: (state, action) => { state.value = action.payload; },
	}
});
const slice04 = createSlice({
	name: 'store04',
	initialState: { value: 0 },
	reducers: {
		setStore04: (state, action) => { state.value = action.payload; },
	}
});
const slice05 = createSlice({
	name: 'store05',
	initialState: { value: 0 },
	reducers: {
		setStore05: (state, action) => { state.value = action.payload; },
	}
});
const slice06 = createSlice({
	name: 'store06',
	initialState: { value: 0 },
	reducers: {
		setStore06: (state, action) => { state.value = action.payload; },
	}
});
const slice07 = createSlice({
	name: 'store07',
	initialState: { value: 0 },
	reducers: {
		setStore07: (state, action) => { state.value = action.payload; },
	}
});
const slice08 = createSlice({
	name: 'store08',
	initialState: { value: 0 },
	reducers: {
		setStore08: (state, action) => { state.value = action.payload; },
	}
});
const slice09 = createSlice({
	name: 'store09',
	initialState: { value: 0 },
	reducers: {
		setStore09: (state, action) => { state.value = action.payload; },
	}
});
const slice10 = createSlice({
	name: 'store10',
	initialState: { value: 0 },
	reducers: {
		setStore10: (state, action) => { state.value = action.payload; },
	}
});

export const { setStore01 } = slice01.actions;
export const { setStore02 } = slice02.actions;
export const { setStore03 } = slice03.actions;
export const { setStore04 } = slice04.actions;
export const { setStore05 } = slice05.actions;
export const { setStore06 } = slice06.actions;
export const { setStore07 } = slice07.actions;
export const { setStore08 } = slice08.actions;
export const { setStore09 } = slice09.actions;
export const { setStore10 } = slice10.actions;

export const store = configureStore({
	reducer: {
		store01: slice01.reducer,
		store02: slice02.reducer,
		store03: slice03.reducer,
		store04: slice04.reducer,
		store05: slice05.reducer,
		store06: slice06.reducer,
		store07: slice07.reducer,
		store08: slice08.reducer,
		store09: slice09.reducer,
		store10: slice10.reducer,
	}
});

export type RootState = ReturnType<typeof store.getState>;
