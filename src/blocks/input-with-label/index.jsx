/* eslint-disable react/prop-types */
import { forwardRef } from 'react';
import InputText from '../inputText';
import Label from '../label';

// eslint-disable-next-line react/display-name
const InputWithLabel = forwardRef(
	({ label, labelClass, id, type, inputClass, onChange, value }, ref) => {
		return (
			<div className="mb-6">
				<Label class={labelClass}>{label}</Label>
				<InputText
					id={id}
					type={type}
					class={inputClass}
					onChange={onChange}
					value={value}
					ref={ref}
				/>
			</div>
		);
	}
);

export default InputWithLabel;
