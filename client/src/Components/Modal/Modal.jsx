import React from 'react';
import { useDispatch } from 'react-redux';
import { getModal } from '../../redux/features/modalSlice';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './Modal.module.css';

const Modal = ({ children }) => {
	const getClick = () => dispatch(getModal({ components: '' }));

	const dispatch = useDispatch();
	window.addEventListener('keydown', keyHandler);

	function keyHandler(e) {
		if (e.keyCode !== 27) return;
		window.removeEventListener('keydown', keyHandler);
		dispatch(getModal({ components: '' }));
	}
	return (
		<div className={classes.background}>
			<div className={classes.inner}>
				<div className={classes.block}>
					<ButtonClose getClick={getClick} />
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
