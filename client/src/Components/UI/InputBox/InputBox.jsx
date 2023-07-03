import React from 'react';
import Checkmark from '../Checkmark/Checkmark';

import classes from './InputBox.module.css';

const InputBox = ({ title, setForm, form, keyObject, type, boxClass, disabled }) => {
	return (
		<div className={[classes.box__input, classes[boxClass]].join(' ')}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<input
					value={form[keyObject] || ''}
					onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
					className={classes.input}
					type={type}
					name="title"
					disabled={disabled}
				/>
				<Checkmark isCompleted={form[keyObject]} />
			</div>
		</div>
	);
};

export default InputBox;
