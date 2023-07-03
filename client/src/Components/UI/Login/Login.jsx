import React from 'react';
import { useDispatch } from 'react-redux';
import { postLogout } from '../../../api/logout';
import { getAlert } from '../../../redux/features/alertMessageSlice';
import { getAuth } from '../../../redux/features/authSlice';
import { getModal } from '../../../redux/features/modalSlice';

import classes from './Login.module.css';

const Login = ({ isAuth }) => {
	const dispatch = useDispatch();

	const srcIcon = isAuth?.status ? '/images/icons/logout.svg' : '/images/icons/login.svg';

	const getClick = () => {
		if (isAuth?.status) {
			dispatch(getModal({ component: '' }));
			postLogout().then(data => {
				localStorage.removeItem('accessToken');
				dispatch(
					getAuth({
						status: false,
						user: { email: '', id: '', role: '', username: '', photoProfile: '' },
					})
				);
			});
			dispatch(getAlert({ message: 'Вы вышли из аккаунта!', type: 'warning', isOpened: true }));
		} else {
			dispatch(getModal({ component: 'Authentication' }));
		}
	};
	return (
		<div className={classes.box} onClick={getClick}>
			<img src={srcIcon} alt="login" />
		</div>
	);
};

export default Login;
