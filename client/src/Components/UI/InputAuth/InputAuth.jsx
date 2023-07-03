import React from 'react';
import { useDispatch } from 'react-redux';
import { getModal } from '../../../redux/features/modalSlice';

import classes from './InputAuth.module.css';

const InputAuth = ({ label, labelLink, validationText, input, register, linkContent }) => {
	const dispatch = useDispatch();
	const getClick = () => {
		dispatch(getModal({ component: linkContent }));
	};
	return (
		<div className={classes.block}>
			<div className={classes.label}>
				<label>{label}</label>
				{labelLink ? (
					<span onClick={getClick} className={classes.link}>
						{labelLink}
					</span>
				) : (
					<span></span>
				)}
			</div>
			<input {...register} {...input} className={classes.input} />
			<div className={classes.validation}>{validationText}</div>
		</div>
	);
};

export default InputAuth;
