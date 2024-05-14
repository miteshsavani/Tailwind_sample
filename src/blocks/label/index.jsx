import cx from 'classnames';

const defaultClasses =
	'block text-sm font-medium text-primary dark:text-black';

const Label = ({ class: cls, children }) => {
	return <label className={cx(defaultClasses, cls)}>{children}</label>;
};

export default Label;