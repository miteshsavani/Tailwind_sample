/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import cx from 'classnames';
import { forwardRef } from 'react';

const defaultClasses =
	'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

const InputText = forwardRef(({ id, type, class: cls, onChange, value }, ref) => {
	return (
		<input
			id={id}
			type={type}
			onChange={onChange}
			className={cx(defaultClasses, cls)}
			value={value}
			ref={ref}
		/>
	);
});

export default InputText;
