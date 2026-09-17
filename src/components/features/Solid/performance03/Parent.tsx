import { RelayDataProvider } from "./_models/relayContext";
import { Child00 } from "./_children";

export default function Parent() {
	return (
		<RelayDataProvider>
			<Child00 />
		</RelayDataProvider>
	)
};
