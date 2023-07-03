import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import classes from './Authentication.module.css';
import { validateEmail } from '../../utils/validatorService';
import Modal from '../Modal/Modal';
import ButtonAuth from '../UI/ButtonAuth/ButtonAuth';
import InputAuth from '../UI/InputAuth/InputAuth';
import { resetPassword } from '../../api/reset-password';
import { useDispatch } from 'react-redux';
import { getModal } from '../../redux/features/modalSlice';

const ResetPassword = () => {
	const [validationAll, setValidationAll] = useState('');
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });

	const onSubmit = async dataForm => {
		const response = await resetPassword(dataForm);
		if (response.status !== 200) {
			setValidationAll(response.data.message);
			return;
		}
		dispatch(getModal({ component: 'ResetPasswordAnswer', email: response.data.email }));
	};

	return (
		<Modal>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
				<h4 className={classes.title}>Восстановление пароля</h4>
				<InputAuth
					register={validateEmail(register)}
					label="Email"
					validationText={errors.email ? errors.email.message : ''}
					input={{ id: 'email', autoComplete: 'email', type: 'text' }}
				/>
				<ButtonAuth
					label="Уже есть аккаунт?"
					labelLink="Вход"
					validationText={validationAll}
					linkContent="Authentication"
				>
					Восстановить
				</ButtonAuth>
			</form>
		</Modal>
	);
};

export default ResetPassword;
