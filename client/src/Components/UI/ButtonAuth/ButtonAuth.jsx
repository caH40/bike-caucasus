import React from 'react';
import { useDispatch } from 'react-redux';
import { getModal } from '../../../redux/features/modalSlice';

import classes from './ButtonAuth.module.css';

const ButtonAuth = ({ label, labelLink, validationText = '', children, linkContent }) => {
	const dispatch = useDispatch();
	const getClick = () => {
		dispatch(getModal({ component: linkContent }));
	};
	return (
		<div>
			<div className={classes.block__button}>
				<button className={classes.button}>{children}</button>
				<div className={classes.validation}>{validationText}</div>
			</div>
			<div className={classes.label}>
				<span>{label}</span>
				{labelLink ? (
					<span onClick={getClick} className={classes.link}>
						{labelLink}
					</span>
				) : (
					<span></span>
				)}
			</div>
		</div>
	);
};

export default ButtonAuth;
