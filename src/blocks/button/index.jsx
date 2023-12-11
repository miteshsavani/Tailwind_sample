import cx from 'classnames';

const defaultClasses =
	'text-white bg-primary hover:bg-primary-light hover:border-primary focus:ring-4 focus:outline-none focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800';

const Button = ({ class: cls, children, ...rest }) => {
	return <button className={cx(defaultClasses, cls)} {...rest}>{children}</button>;
};

export default Button;