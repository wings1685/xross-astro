<script lang="ts">
	import MainForm from "./MainForm.svelte";
	import Form from "./Form.svelte";
	import { formSchema, initialFormValues } from "@/_global/form/schema";
</script>
<svelte:head>
	<title>Login...</title>
</svelte:head>
<div id="form_login">
	<Form
		TargetForm={ MainForm }
		schema={ formSchema }
		initialValues={ initialFormValues }
	/>
</div>
