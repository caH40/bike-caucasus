import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useResize } from '../../../hooks/use-resize';
import { getAlert } from '../../../redux/features/alertMessageSlice';

import classes from './UserAccount.module.css';

const UserAccount = ({ isAuth, updateMenu }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const size = useResize();

	const avatar = isAuth?.user?.photoProfile ? isAuth.user.photoProfile : '/images/avatar.svg';
	const getClick = () => {
		if (isAuth.status) {
			navigate('/profile');
			if (!size.isScreenLg) updateMenu();
		} else {
			dispatch(getAlert({ message: 'Необходима авторизация', type: 'info', isOpened: true }));
		}
	};
	return (
		<>
			<img className={classes.img} src={avatar} alt="avatar" onClick={getClick} />
		</>
	);
};

export default UserAccount;
