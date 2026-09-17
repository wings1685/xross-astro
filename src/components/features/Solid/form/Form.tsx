import { Index } from "solid-js";
import { produce } from "solid-js/store";
import { checkboxItems, formErrorMessage, formSchema, initialBasicValues, initialFormValues, radioItems, selectItems } from "@/_global/form/schema";
import { createForm } from "./_models/createForm";
import type { FormSchema } from "@/_global/form/schema";

export default function SolidForm() {
	const { data, setData, errors, setErrors, isSubmitDisabled, onSubmit, bindElement, reset } = createForm<FormSchema>({
		initialValues: initialFormValues,
		schema: formSchema,
	});

	type CheckEvent = Event & {
		currentTarget: HTMLInputElement;
		target: HTMLInputElement;
	}
	const handleCheck = (e: CheckEvent) => {
		const input = e.currentTarget;
		const keys = input.name.split('.');
		const value = input.value;
		const values = <T,>(inputItems: T[]) => (input.checked ? [ ...inputItems, value ] : inputItems.filter(item => item !== value).map(item => item));
		if (keys.length === 1) {
			setData('checkbox', values(data.checkbox));
		} else if (keys.length === 2) {
			setData('obj', 'checkbox', values(data.obj.checkbox));
		} else {
			const index = +keys[1];
			setData(produce(it => it.items[index] = { ...it.items[index], checkbox: values(data.items[index].checkbox) }));
		}
	};
	const addItem = () => {
		const index = data.items.length;
		setData('items', index, initialBasicValues);
	};

	const handleSubmit = () => {
		setErrors({ error: ['エラーで一番上にスクロールします'] });
	};

	return (
		<form onSubmit={ onSubmit(handleSubmit) }>
			<p ref={ bindElement } data-el="error">{ errors().error }</p>
			<fieldset>
				<input name="input" type="text" value={ data.input } ref={ bindElement } onInput={ e => setData('input', e.currentTarget.value) } />
				{errors().input && <p>{ formErrorMessage.input.empty }</p>}
			</fieldset>
			<fieldset>
				<textarea name="textarea" value={ data.textarea } ref={ bindElement } onInput={ e => setData('textarea', e.currentTarget.value) } />
				{errors().textarea && <p>{ formErrorMessage.textarea.empty }</p>}
			</fieldset>
			<fieldset>
				<div>
					<Index each={ checkboxItems }>
						{check => (
							<label>
								<input name="checkbox" type="checkbox" value={ check() } ref={ bindElement } checked={ data.checkbox.includes(check()) } onChange={ handleCheck } />
								<span>{ check() }</span>
							</label>
						)}
					</Index>
					{errors().checkbox && <p>{ formErrorMessage.checkbox.empty }</p>}
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>
						<input name="radio" type="radio" value="" ref={ bindElement } onChange={ e => setData('radio', e.currentTarget.value) } />
						<span>選択なし</span>
					</label>
					<Index each={ radioItems }>
						{radio => (
							<label>
								<input name="radio" type="radio" value={ radio() } ref={ bindElement } checked={ radio() === data.radio } onChange={ e => setData('radio', e.currentTarget.value) } />
								<span>{ radio() }</span>
							</label>
						)}
					</Index>
					{errors().radio && <p>{ formErrorMessage.radio.empty }</p>}
				</div>
			</fieldset>
			<fieldset>
				<div>
					<select name="select" ref={ bindElement } onChange={ e => setData('select', e.currentTarget.value) }>
						<option value="">---</option>
						<Index each={ selectItems }>
							{select => (
								<option value={ select() } selected={ select() === data.select }>{ select() }</option>
							)}
						</Index>
					</select>
					{errors().select && <p>{ formErrorMessage.select.empty }</p>}
				</div>
			</fieldset>
			<div class="obj">
				<fieldset>
					<input name="obj.input" type="text" value={ data.obj.input } ref={ bindElement } onInput={ e => setData('obj', 'input', e.currentTarget.value) } />
					{errors()[`obj.input`] && <p>{ formErrorMessage.input.empty }</p>}
				</fieldset>
				<fieldset>
					<textarea name="obj.textarea" value={ data.obj.textarea } ref={ bindElement } onInput={ e => setData('obj', 'textarea', e.currentTarget.value) } />
					{errors()[`obj.textarea`] && <p>{ formErrorMessage.textarea.empty }</p>}
				</fieldset>
				<fieldset>
					<div>
						<Index each={ checkboxItems }>
							{check => (
								<label>
									<input name="obj.checkbox" type="checkbox" value={ check() } ref={ bindElement } checked={ data.obj.checkbox.includes(check()) } onChange={ handleCheck } />
									<span>{ check() }</span>
								</label>
							)}
						</Index>
						{errors()[`obj.checkbox`] && <p>{ formErrorMessage.checkbox.empty }</p>}
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label>
							<input name="obj.radio" type="radio" value="" ref={ bindElement } onChange={ e => setData('obj', 'radio', e.currentTarget.value) } />
							<span>選択なし</span>
						</label>
						<Index each={ radioItems }>
							{radio => (
								<label>
									<input name="obj.radio" type="radio" value={ radio() } ref={ bindElement } checked={ radio() === data.obj.radio } onChange={ e => setData('obj', 'radio', e.currentTarget.value) } />
									<span>{ radio() }</span>
								</label>
							)}
						</Index>
						{errors()[`obj.radio`] && <p>{ formErrorMessage.radio.empty }</p>}
					</div>
				</fieldset>
				<fieldset>
					<select name="obj.select" ref={ bindElement } onChange={ e => setData('obj', 'select', e.currentTarget.value) }>
						<option value="">---</option>
						<Index each={ selectItems }>
							{select => (
								<option value={ select() } selected={ select() === data.obj.select }>{ select() }</option>
							)}
						</Index>
					</select>
					{errors()[`obj.select`] && <p>{ formErrorMessage.select.empty }</p>}
				</fieldset>
			</div>
			<fieldset>
				<button type="button" onClick={ addItem }>Add Item</button>
			</fieldset>
			<div class="items">
				<Index each={ data.items }>
					{(item, index) => (
						<div class="item">
							<fieldset>
								<input type="text" value={ item().input } ref={ el => bindElement(el, `items.${index}.input`) } onInput={ e => setData(produce(d => { d.items[index] = { ...d.items[index], input: e.currentTarget.value }})) } />
								{errors()[`items.${index}.input`] && <p>{ formErrorMessage.input.empty }</p>}
							</fieldset>
							<fieldset>
								<textarea ref={ el => bindElement(el, `items.${index}.textarea`) } value={ item().textarea } onInput={ e => setData(produce(d => { d.items[index] = { ...d.items[index], textarea: e.currentTarget.value }})) } />
								{errors()[`items.${index}.textarea`] && <p>{ formErrorMessage.textarea.empty }</p>}
							</fieldset>
							<fieldset>
								<div>
									<Index each={ checkboxItems }>
										{check => (
											<label>
												<input name={ `items.${index}.checkbox` } type="checkbox" value={ check() } ref={ el => bindElement(el, `items.${index}.checkbox`) } checked={ item().checkbox.includes(check()) } onChange={ handleCheck } />
												<span>{ check() }</span>
											</label>
										)}
									</Index>
									{errors()[`items.${index}.checkbox`] && <p>{ formErrorMessage.checkbox.empty }</p>}
								</div>
							</fieldset>
							<fieldset>
								<div>
									<label>
										<input name={ `items.${index}.radio` } type="radio" value="" ref={ el => bindElement(el, `items.${index}.radio`) } onChange={ e => setData(produce(d => { d.items[index] = { ...d.items[index], radio: e.currentTarget.value }})) } />
										<span>選択なし</span>
									</label>
									<Index each={ radioItems }>
										{radio => (
											<label>
												<input name={ `items.${index}.radio` } type="radio" value={ radio() } ref={ el => bindElement(el, `items.${index}.radio`) } checked={ radio() === item().radio } onChange={ e => setData(produce(d => { d.items[index] = { ...d.items[index], radio: e.currentTarget.value }})) }  />
												<span>{ radio() }</span>
											</label>
										)}
									</Index>
									{errors()[`items.${index}.radio`] && <p>{ formErrorMessage.radio.empty }</p>}
								</div>
							</fieldset>
							<fieldset>
								<select ref={ el => bindElement(el, `items.${index}.select`) } onChange={ e => setData(produce(d => { d.items[index] = { ...d.items[index], select: e.currentTarget.value }})) }>
									<option value="">---</option>
									<Index each={ selectItems }>
										{select => (
											<option value={ select() } selected={ select() === item().select }>{ select() }</option>
										)}
									</Index>
								</select>
								{errors()[`items.${index}.select`] && <p>{ formErrorMessage.select.empty }</p>}
							</fieldset>
						</div>
					)}
				</Index>
			</div>
			<fieldset>
				<button type="submit" disabled={ isSubmitDisabled() }>Submit</button>
			</fieldset>
			<fieldset>
				<button type="button" onClick={ reset }>Reset</button>
			</fieldset>
		</form>
	)
}
