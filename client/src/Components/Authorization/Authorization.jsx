import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import classes from './Authentication.module.css';
import ButtonAuth from '../UI/ButtonAuth/ButtonAuth';
import InputAuth from '../UI/InputAuth/InputAuth';
import { validatePassword, validateUsername } from '../../utils/validatorService';
import Modal from '../Modal/Modal';
import { postAuthorization } from '../../api/authorization';
import { useDispatch } from 'react-redux';
import { getModal } from '../../redux/features/modalSlice';
import { getAuth } from '../../redux/features/authSlice';
import { getAlert } from '../../redux/features/alertMessageSlice';

const Authorization = () => {
	const [validationAll, setValidationAll] = useState('');
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });

	const onSubmit = async dataForm => {
		const response = await postAuthorization(dataForm);
		if (response.status !== 201) {
			setValidationAll(response.data);
			return;
		}
		if (response.data.status === 'wrong') {
			setValidationAll(response.data.message);
			return;
		}
		dispatch(getModal({ component: '' }));

		if (response.data.accessToken) {
			localStorage.setItem('accessToken', response.data.accessToken);
			dispatch(getAuth({ status: true, user: response.data.user }));
			dispatch(getAlert({ message: 'Успешная авторизация!', type: 'success', isOpened: true }));
		}
	};
	return (
		<Modal>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
				<h4 className={classes.title}>Вход на Bike-Caucasus</h4>
				<InputAuth
					register={validateUsername(register)}
					label="Логин"
					validationText={errors.username ? errors.username.message : ''}
					input={{ id: 'username', autoComplete: 'username', type: 'text' }}
				/>
				<InputAuth
					register={validatePassword(register)}
					label="Пароль"
					labelLink="Забыли пароль?"
					linkContent="ResetPassword"
					validationText={errors.password ? errors.password.message : ''}
					input={{ id: 'password', autoComplete: 'current-password', type: 'password' }}
				/>
				<ButtonAuth
					label="Впервые на сайте?"
					labelLink="Создать аккаунт!"
					linkContent="Registration"
					validationText={validationAll}
				>
					Вход
				</ButtonAuth>
			</form>
		</Modal>
	);
};

export default Authorization;
