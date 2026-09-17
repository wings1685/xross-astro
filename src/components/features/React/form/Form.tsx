/** @jsxImportSource react */

"use client";

import { checkboxItems, formErrorMessage, formSchema, initialBasicValues, initialFormValues, radioItems, selectItems } from "@/_global/form/schema";
import { createForm } from "./_models/createForm";
import type { FormSchema } from "@/_global/form/schema";

export default function ReactForm() {
	const { data, setData, errors, setErrors, isSubmitDisabled, onSubmit, bindElement, reset } = createForm<FormSchema>({
		initialValues: initialFormValues,
		schema: formSchema,
	});

	type UpdateElements = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
	type UpdateEvent<T> = T & {
		currentTarget: UpdateElements;
	}
	const updateData = <T,>(e: UpdateEvent<T>) => {
		const el = e.currentTarget;
		const keys = el.name.split('.');
		const check = el as HTMLInputElement;
		const value = el.value;
		const values = <T,>(inputItems: T[]) => (check.checked ? [ ...inputItems, value ] : inputItems.filter(item => item !== value).map(item => item));
		if (keys.length === 1) {
			if (!(keys[0] in data)) return;
			const item = keys[0] === 'checkbox' ? { checkbox: values(data.checkbox) } : { [keys[0]]: el.value };
			setData({ ...structuredClone(data), ...item });
		} else if (keys.length === 2) {
			if (keys[0] !== 'obj') return;
			const item = keys[1] === 'checkbox' ? { checkbox: values(data.obj.checkbox) } : { [keys[1]]: el.value };
			setData({
				...structuredClone(data),
				obj: { ...structuredClone(data.obj), ...item ,}
			});
		} else {
			if (keys[0] !== 'items' || Number.isNaN(keys[1])) return;
			const index = +keys[1];
			const items = structuredClone(data.items);
			if (keys[2] === 'checkbox') {
				items[index].checkbox = values(items[index].checkbox);
			} else {
				items[index] = { ...items[index], [keys[2]]: el.value };
			}
			setData({
				...structuredClone(data),
				items: items,
			});
		}
	};
	const addItem = () => {
		const index = data.items.length;
		setData({ ...data, items: [ ...data.items, initialBasicValues ]});
	};

	const handleSubmit = () => {
		setErrors({ error: ['エラーで一番上にスクロールします'] });
	};

	return (
		<form onSubmit={ onSubmit(handleSubmit) }>
			<p ref={ bindElement } data-el="error">{ errors.error }</p>
			<fieldset>
				<input name="input" type="text" value={ data.input } ref={ bindElement } onInput={ updateData } />
				{errors.input && <p>{ formErrorMessage.input.empty }</p>}
			</fieldset>
			<fieldset>
				<textarea name="textarea" value={ data.textarea } ref={ bindElement } onInput={ updateData } />
				{errors.textarea && <p>{ formErrorMessage.textarea.empty }</p>}
			</fieldset>
			<fieldset>
				<div>
					{checkboxItems.map(check => (
						<label key={ check }>
							<input name="checkbox" type="checkbox" value={ check } ref={ bindElement } checked={ data.checkbox.includes(check) } onChange={ updateData } />
							<span>{ check }</span>
						</label>
					))}
					{errors.checkbox && <p>{ formErrorMessage.checkbox.empty }</p>}
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>
						<input name="radio" type="radio" value="" ref={ bindElement } onChange={ updateData } />
						<span>選択なし</span>
					</label>
					{radioItems.map(radio => (
						<label key={ radio }>
							<input name="radio" type="radio" value={ radio } ref={ bindElement } checked={ radio === data.radio } onChange={ updateData } />
							<span>{ radio }</span>
						</label>
					))}
					{errors.radio && <p>{ formErrorMessage.radio.empty }</p>}
				</div>
			</fieldset>
			<fieldset>
				<div>
					<select name="select" value={ data.select } ref={ bindElement } onChange={ updateData }>
						<option value="">---</option>
						{selectItems.map(select => (
							<option key={ select } value={ select }>{ select }</option>
						))}
					</select>
					{errors.select && <p>{ formErrorMessage.select.empty }</p>}
				</div>
			</fieldset>
			<div className="obj">
				<fieldset>
					<input name="obj.input" type="text" value={ data.obj.input } ref={ bindElement } onInput={ updateData } />
					{errors[`obj.input`] && <p>{ formErrorMessage.input.empty }</p>}
				</fieldset>
				<fieldset>
					<textarea name="obj.textarea" value={ data.obj.textarea } ref={ bindElement } onInput={ updateData } />
					{errors[`obj.textarea`] && <p>{ formErrorMessage.textarea.empty }</p>}
				</fieldset>
				<fieldset>
					<div>
						{checkboxItems.map(check => (
							<label key={ check }>
								<input name="obj.checkbox" type="checkbox" value={ check } ref={ bindElement } checked={ data.obj.checkbox.includes(check) } onChange={ updateData } />
								<span>{ check }</span>
							</label>
						))}
						{errors[`obj.checkbox`] && <p>{ formErrorMessage.checkbox.empty }</p>}
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label>
							<input name="obj.radio" type="radio" value="" ref={ bindElement } onChange={ updateData } />
							<span>選択なし</span>
						</label>
						{radioItems.map(radio => (
							<label key={ radio }>
								<input name="obj.radio" type="radio" value={ radio } ref={ bindElement } checked={ radio === data.obj.radio } onChange={ updateData } />
								<span>{ radio }</span>
							</label>
						))}
						{errors[`obj.radio`] && <p>{ formErrorMessage.radio.empty }</p>}
					</div>
				</fieldset>
				<fieldset>
					<select name="obj.select" value={ data.obj.select } ref={ bindElement } onChange={ updateData }>
						<option value="">---</option>
						{selectItems.map(select => (
							<option key={ select } value={ select }>{ select }</option>
						))}
					</select>
					{errors[`obj.select`] && <p>{ formErrorMessage.select.empty }</p>}
				</fieldset>
			</div>
			<fieldset>
				<button type="button" onClick={ addItem }>Add Item</button>
			</fieldset>
			<div className="items">
				{data.items.map((item, index) => (
					<div key={ index } className="item">
						<fieldset>
							<input name={ `items.${index}.input` } type="text" value={ item.input } ref={ bindElement } onInput={ updateData } />
							{errors[`items.${index}.input`] && <p>{ formErrorMessage.input.empty }</p>}
						</fieldset>
						<fieldset>
							<textarea name={ `items.${index}.textarea` } value={ item.textarea } ref={ bindElement } onInput={ updateData } />
							{errors[`items.${index}.textarea`] && <p>{ formErrorMessage.textarea.empty }</p>}
						</fieldset>
						<fieldset>
							<div>
								{checkboxItems.map(check => (
									<label key={ check }>
										<input name={ `items.${index}.checkbox` } type="checkbox" value={ check } ref={ bindElement } checked={ item.checkbox.includes(check) } onChange={ updateData } />
										<span>{ check }</span>
									</label>
								))}
								{errors[`items.${index}.checkbox`] && <p>{ formErrorMessage.checkbox.empty }</p>}
							</div>
						</fieldset>
						<fieldset>
							<div>
								<label>
									<input name={ `items.${index}.radio` } type="radio" value="" ref={ bindElement } onChange={ updateData } />
									<span>選択なし</span>
								</label>
								{radioItems.map(radio => (
									<label key={ radio }>
										<input name={ `items.${index}.radio` } type="radio" value={ radio } ref={ bindElement } checked={ radio === item.radio } onChange={ updateData }  />
										<span>{ radio }</span>
									</label>
								))}
								{errors[`items.${index}.radio`] && <p>{ formErrorMessage.radio.empty }</p>}
							</div>
						</fieldset>
						<fieldset>
							<select name={ `items.${index}.select` } value={ item.select } ref={ bindElement } onChange={ updateData }>
								<option value="">---</option>
								{selectItems.map(select => (
									<option key={ select } value={ select }>{ select }</option>
								))}
							</select>
							{errors[`items.${index}.select`] && <p>{ formErrorMessage.select.empty }</p>}
						</fieldset>
					</div>
				))}
			</div>
			<fieldset>
				<button type="submit" disabled={ isSubmitDisabled }>Submit</button>
			</fieldset>
			<fieldset>
				<button type="button" onClick={ reset }>Reset</button>
			</fieldset>
		</form>
	)
}
