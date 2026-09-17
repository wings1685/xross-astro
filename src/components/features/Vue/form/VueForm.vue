<script setup lang="ts">
	import { checkboxItems, formErrorMessage, formSchema, initialBasicValues, initialFormValues, radioItems, selectItems } from "@/_global/form/schema";
	import { createForm } from "./_models/createForm";
	import type { FormSchema } from "@/_global/form/schema";

	const { data, errors, setErrors, isSubmitDisabled, onSubmit, bindElement, reset } = createForm<FormSchema>({
		initialValues: initialFormValues,
		schema: formSchema,
	});

	const addItem = () => {
		data.value.items = [ ...data.value.items, ...[structuredClone(initialBasicValues)] ];
	};

	const handleSubmit = () => {
		setErrors({ error: ['エラーで一番上にスクロールします'] });
	};
	const editSubmit = onSubmit(handleSubmit);
</script>
<template>
	<form @submit.prevent="editSubmit">
		<p :ref="el => bindElement(el as HTMLElement)" data-el="error">{{ errors.error }}</p>
		<fieldset>
			<input name="input" type="text" v-model="data.input" :ref="el => bindElement(el as HTMLElement)" />
			<p v-if="errors.input">{{ formErrorMessage.input.empty }}</p>
		</fieldset>
		<fieldset>
			<textarea name="textarea" v-model="data.textarea" :ref="el => bindElement(el as HTMLElement)"></textarea>
			<p v-if="errors.textarea">{{ formErrorMessage.textarea.empty }}</p>
		</fieldset>
		<fieldset>
			<div>
				<label v-for="check of checkboxItems" :key="check">
					<input name="checkbox" type="checkbox" :ref="el => bindElement(el as HTMLElement)" :value="check" v-model="data.checkbox" />
					<span>{{ check }}</span>
				</label>
				<p v-if="errors.checkbox">{{ formErrorMessage.checkbox.empty }}</p>
			</div>
		</fieldset>
		<fieldset>
			<div>
				<label>
					<input name="radio" type="radio" value="" :ref="el => bindElement(el as HTMLElement)" v-model="data.radio" />
					<span>選択なし</span>
				</label>
				<label v-for="radio of radioItems" :key="radio">
					<input name="radio" type="radio" :value="radio" :ref="el => bindElement(el as HTMLElement)" v-model="data.radio" />
					<span>{{ radio }}</span>
				</label>
				<p v-if="errors.radio">{{ formErrorMessage.radio.empty }}</p>
			</div>
		</fieldset>
		<fieldset>
			<div>
				<select name="select" :ref="el => bindElement(el as HTMLElement)" v-model="data.select">
					<option value="">---</option>
					<option v-for="select of selectItems" :key="select">{{ select }}</option>
				</select>
				<p v-if="errors.select">{{ formErrorMessage.select.empty }}</p>
			</div>
		</fieldset>
		<div class="obj">
			<fieldset>
				<input name="obj.input" type="text" v-model="data.obj.input" :ref="el => bindElement(el as HTMLElement)" />
				<p v-if="errors[`obj.input`]">{{ formErrorMessage.input.empty }}</p>
			</fieldset>
			<fieldset>
				<textarea name="obj.textarea" :ref="el => bindElement(el as HTMLElement)" v-model="data.obj.textarea" />
				<p v-if="errors[`obj.textarea`]">{{ formErrorMessage.textarea.empty }}</p>
			</fieldset>
			<fieldset>
				<div>
					<label v-for="check of checkboxItems" :key="check">
						<input name="obj.checkbox" type="checkbox" :ref="el => bindElement(el as HTMLElement)" :value="check" v-model="data.obj.checkbox" />
						<span>{{ check }}</span>
					</label>
					<p v-if="errors[`obj.checkbox`]">{{ formErrorMessage.checkbox.empty }}</p>
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>
						<input name="obj.radio" type="radio" value="" :ref="el => bindElement(el as HTMLElement)" v-model="data.obj.radio" />
						<span>選択なし</span>
					</label>
					<label v-for="radio of radioItems" :key="radio">
						<input name="obj.radio" type="radio" :value="radio" :ref="el => bindElement(el as HTMLElement)" v-model="data.obj.radio" />
						<span>{{ radio }}</span>
					</label>
					<p v-if="errors[`obj.radio`]">{{ formErrorMessage.radio.empty }}</p>
				</div>
			</fieldset>
			<fieldset>
				<select name="obj.select" :ref="el => bindElement(el as HTMLElement)" v-model="data.obj.select">
					<option value="">---</option>
					<option v-for="select of selectItems" :key="select">{{ select }}</option>
				</select>
				<p v-if="errors[`obj.select`]">{{ formErrorMessage.select.empty }}</p>
			</fieldset>
		</div>
		<fieldset>
			<button type="button" @click="addItem()">Add Item</button>
		</fieldset>
		<div class="items">
			<div v-for="(item, index) of data.items" :key="index" class="item">
				<fieldset>
					<input :name="`items.${index}.input`" type="text" :ref="el => bindElement(el as HTMLElement)" v-model="item.input" />
					<p v-if="errors[`items.${index}.input`]">{{ formErrorMessage.input.empty }}</p>
				</fieldset>
				<fieldset>
					<textarea :name="`items.${index}.textarea`" :ref="el => bindElement(el as HTMLElement)" v-model="item.textarea" />
					<p v-if="errors[`items.${index}.textarea`]">{{ formErrorMessage.textarea.empty }}</p>
				</fieldset>
				<fieldset>
					<div>
						<label v-for="check of checkboxItems" :key="check">
							<input :name="`items.${index}.checkbox`" type="checkbox" :ref="el => bindElement(el as HTMLElement)" :value="check" v-model="item.checkbox" />
							<span>{{ check }}</span>
						</label>
						<p v-if="errors[`items.${index}.checkbox`]">{{ formErrorMessage.checkbox.empty }}</p>
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label>
							<input :name="`items.${index}.radio`" type="radio" value="" :ref="el => bindElement(el as HTMLElement)" v-model="item.radio" />
							<span>選択なし</span>
						</label>
						<label v-for="radio of radioItems" :key="radio">
							<input :name="`items.${index}.radio`" type="radio" :value="radio" :ref="el => bindElement(el as HTMLElement)" v-model="item.radio" />
							<span>{{ radio }}</span>
						</label>
						<p v-if="errors[`items.${index}.radio`]">{{ formErrorMessage.radio.empty }}</p>
					</div>
				</fieldset>
				<fieldset>
					<select :name="`items.${index}.select`" :ref="el => bindElement(el as HTMLElement)" v-model="item.select">
						<option value="">---</option>
						<option v-for="select of selectItems" :key="select">{{ select }}</option>
					</select>
					<p v-if="errors[`items.${index}.select`]">{{ formErrorMessage.select.empty }}</p>
				</fieldset>
			</div>
		</div>
		<fieldset>
			<button type="submit" :disabled="isSubmitDisabled">Submit</button>
		</fieldset>
		<fieldset>
			<button type="button" @click="reset">Reset</button>
		</fieldset>
	</form>
</template>
