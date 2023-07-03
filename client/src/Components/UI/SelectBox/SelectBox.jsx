import React from 'react';
import Checkmark from '../Checkmark/Checkmark';

import classes from './SelectBox.module.css';

const SelectBox = ({ title, setForm, form, keyObject, values, boxClass }) => {
	return (
		<div className={`${classes.box__input} ${classes[boxClass]}`}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<select
					className={classes.select}
					value={form[keyObject]}
					onChange={e => setForm(prev => ({ ...prev, [keyObject]: e.target.value }))}
				>
					{values.map(value => (
						<option className={classes.option} value={value.name} key={value.id}>
							{value.name}
						</option>
					))}
				</select>
				<Checkmark isCompleted={form[keyObject]} />
			</div>
		</div>
	);
};

export default SelectBox;
