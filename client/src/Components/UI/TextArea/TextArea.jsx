import React from 'react';
import Checkmark from '../Checkmark/Checkmark';
import classes from './TextArea.module.css';
const TextArea = ({ form, setForm, title, keyObject, boxClass }) => {
	return (
		<div className={`${classes.box__textarea} ${classes[boxClass]}`}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<textarea
					value={form[keyObject]}
					onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
					className={classes.textarea}
				/>
				<Checkmark isCompleted={form[keyObject]} />
			</div>
		</div>
	);
};

export default TextArea;
