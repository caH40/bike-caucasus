import React from 'react';
import classes from './Button.module.css';

const Button = ({ getClick, children, type, additionalClasses }) => {
	additionalClasses += ' button';
	const propsClasses = additionalClasses
		?.split(' ')
		.map(propsClass => classes[propsClass])
		.join(' ');

	return (
		<button
			className={propsClasses}
			onClick={e => {
				e.stopPropagation();
				getClick(e);
			}}
			type={type}>
			{children}
		</button>
	);
};

export default Button;
