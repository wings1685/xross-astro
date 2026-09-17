<script lang="ts">
	import { checkboxItems, formErrorMessage, initialBasicValues, radioItems, selectItems } from "@/_global/form/schema";
	import type { FormSchema } from "@/_global/form/schema";
	import type { FormProps } from "./types";

	const { data, errors, setErrors, isSubmitDisabled, bindElement, onSubmit, reset }: FormProps<FormSchema> = $props();

	const addItem = () => {
		data.items = [ ...data.items, initialBasicValues ];
	};

	const handleSubmit = () => {
		setErrors({ error: ['エラーで一番上にスクロールします'] });
	};
</script>
<form onsubmit={ onSubmit(handleSubmit) }>
	<p use:bindElement data-el="error">{ errors.error }</p>
	<fieldset>
		<input use:bindElement name="input" type="text" bind:value={ data.input } />
		{#if errors.input}
			<p>{ formErrorMessage.input.empty }</p>
		{/if}
	</fieldset>
	<fieldset>
		<textarea use:bindElement name="textarea" bind:value={ data.textarea }></textarea>
		{#if errors.textarea}
			<p>{ formErrorMessage.textarea.empty }</p>
		{/if}
	</fieldset>
	<fieldset>
		<div>
			{#each checkboxItems as check }
				<label>
					<input use:bindElement name="checkbox" type="checkbox" value={ check } bind:group={ data.checkbox } />
					<span>{ check }</span>
				</label>
			{/each}
			{#if errors.checkbox}
				<p>{ formErrorMessage.checkbox.empty }</p>
			{/if}
		</div>
	</fieldset>
	<fieldset>
		<div>
			<label>
				<input use:bindElement name="radio" type="radio" value="" bind:group={ data.radio } />
				<span>選択なし</span>
			</label>
			{#each radioItems as radio }
				<label>
					<input use:bindElement name="radio" type="radio" value={ radio } bind:group={ data.radio } />
					<span>{ radio }</span>
				</label>
			{/each}
			{#if errors.radio}
				<p>{ formErrorMessage.radio.empty }</p>
			{/if}
		</div>
	</fieldset>
	<fieldset>
		<div>
			<select use:bindElement name="select" bind:value={ data.select }>
				<option value="">---</option>
				{#each selectItems as select }
					<option value={ select }>{ select }</option>
				{/each}
			</select>
			{#if errors.select}
				<p>{ formErrorMessage.select.empty }</p>
			{/if}
		</div>
	</fieldset>
	<div class="obj">
		<fieldset>
			<input use:bindElement name="obj.input" type="text" bind:value={ data.obj.input } />
			{#if errors[`obj.input`]}
				<p>{ formErrorMessage.input.empty }</p>
			{/if}
		</fieldset>
		<fieldset>
			<textarea use:bindElement name="obj.textarea" bind:value={ data.obj.textarea }></textarea>
			{#if errors[`obj.textarea`]}
				<p>{ formErrorMessage.textarea.empty }</p>
			{/if}
		</fieldset>
		<fieldset>
			<div>
				{#each checkboxItems as check }
					<label>
						<input use:bindElement name="obj.checkbox" type="checkbox" value={ check } bind:group={ data.obj.checkbox } />
						<span>{ check }</span>
					</label>
				{/each}
				{#if errors[`obj.checkbox`]}
					<p>{ formErrorMessage.checkbox.empty }</p>
				{/if}
			</div>
		</fieldset>
		<fieldset>
			<div>
				<label>
					<input use:bindElement name="obj.radio" type="radio" value="" bind:group={ data.obj.radio } />
					<span>選択なし</span>
				</label>
				{#each radioItems as radio }
					<label>
						<input use:bindElement name="obj.radio" type="radio" value={ radio } bind:group={ data.obj.radio } />
						<span>{ radio }</span>
					</label>
				{/each}
				{#if errors[`obj.radio`]}
					<p>{ formErrorMessage.radio.empty }</p>
				{/if}
			</div>
		</fieldset>
		<fieldset>
			<select use:bindElement name="obj.select" bind:value={ data.obj.select}>
				<option value="">---</option>
				{#each selectItems as select }
					<option value={ select }>{ select }</option>
				{/each}
			</select>
			{#if errors[`obj.select`]}
				<p>{ formErrorMessage.select.empty }</p>
			{/if}
		</fieldset>
	</div>
	<fieldset>
		<button type="button" onclick={ addItem }>Add Item</button>
	</fieldset>
	<div class="items">
		{#each data.items as item, index }
			<div class="item">
				<fieldset>
					<input use:bindElement name={ `items.${index}.input` } type="text" bind:value={ item.input } />
					{#if errors[`items.${index}.input`]}
						<p>{ formErrorMessage.input.empty }</p>
					{/if}
				</fieldset>
				<fieldset>
					<textarea use:bindElement name={ `items.${index}.textarea` } bind:value={ item.textarea }></textarea>
					{#if errors[`items.${index}.textarea`]}
						<p>{ formErrorMessage.textarea.empty }</p>
					{/if}
				</fieldset>
				<fieldset>
					<div>
						{#each checkboxItems as check }
							<label>
								<input use:bindElement name={ `items.${index}.checkbox` } type="checkbox" value={ check } bind:group={ item.checkbox } />
								<span>{ check }</span>
							</label>
						{/each}
						{#if errors[`items.${index}.checkbox`]}
							<p>{ formErrorMessage.checkbox.empty }</p>
						{/if}
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label>
							<input use:bindElement name={ `items.${index}.radio` } type="radio" value="" bind:group={ item.radio } />
							<span>選択なし</span>
						</label>
						{#each radioItems as radio }
							<label>
								<input use:bindElement name={ `items.${index}.radio` } type="radio" value={ radio } bind:group={ item.radio } />
								<span>{ radio }</span>
							</label>
						{/each}
						{#if errors[`items.${index}.radio`]}
							<p>{ formErrorMessage.radio.empty }</p>
						{/if}
					</div>
				</fieldset>
				<fieldset>
					<select use:bindElement name={ `items.${index}.select` } bind:value={ item.select }>
						<option value="">---</option>
						{#each selectItems as select }
							<option value={ select }>{ select }</option>
						{/each}
					</select>
					{#if errors[`items.${index}.select`]}
						<p>{ formErrorMessage.select.empty }</p>
					{/if}
				</fieldset>
			</div>
		{/each}
	</div>
	<fieldset>
		<button type="submit" disabled={ isSubmitDisabled }>Submit</button>
	</fieldset>
	<fieldset>
		<button type="button" onclick={ reset }>Reset</button>
	</fieldset>
</form>
