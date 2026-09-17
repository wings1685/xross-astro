<script lang="ts">
	import { Flags, NestObject, Primitive } from "./";

	let start = $state(0);

	const handleClick = () => {
		start++;
	};
</script>
<fieldset>
	<button onclick={ handleClick }>リアクティブ構造差の計測開始</button>
</fieldset>
<Primitive start={ start } />
<NestObject start={ start } />
<Flags start={ start } />
