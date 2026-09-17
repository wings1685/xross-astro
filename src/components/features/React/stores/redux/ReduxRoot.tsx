/** @jsxImportSource react */

import { Provider } from "react-redux";
import { store } from "../_models/redux";
import Redux00 from "@/components/features/React/stores/redux/Quantum00";
import Redux01 from "@/components/features/React/stores/redux/Quantum01";
import Redux02 from "@/components/features/React/stores/redux/Quantum02";
import Redux03 from "@/components/features/React/stores/redux/Quantum03";
import Redux04 from "@/components/features/React/stores/redux/Quantum04";
import Redux05 from "@/components/features/React/stores/redux/Quantum05";
import Redux06 from "@/components/features/React/stores/redux/Quantum06";
import Redux07 from "@/components/features/React/stores/redux/Quantum07";
import Redux08 from "@/components/features/React/stores/redux/Quantum08";
import Redux09 from "@/components/features/React/stores/redux/Quantum09";
import Redux10 from "@/components/features/React/stores/redux/Quantum10";

export default function ReduxRoot() {
	return (
		<Provider store={ store }>
			<Redux00 />
			<Redux01 />
			<Redux02 />
			<Redux03 />
			<Redux04 />
			<Redux05 />
			<Redux06 />
			<Redux07 />
			<Redux08 />
			<Redux09 />
			<Redux10 />
		</Provider>
	)
}
