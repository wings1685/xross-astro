export type RelayData = number;
export type RelaySetter = (_: RelayData) => void;
export type RelayProps = {
	relay: RelayData;
	setRelay: RelaySetter;
};
