import React from 'react';
import { useForm } from 'react-hook-form';

import classes from './Authentication.module.css';

import ButtonAuth from '../UI/ButtonAuth/ButtonAuth';
import InputAuth from '../UI/InputAuth/InputAuth';
import Modal from '../Modal/Modal.jsx';
import { validatePassword } from '../../utils/validatorService';
import { postNewPassword } from '../../api/new-password';
import { useDispatch } from 'react-redux';
import { getModal } from '../../redux/features/modalSlice';

import { getAlert } from '../../redux/features/alertMessageSlice';

const CreateNewPassword = ({ userId }) => {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'all' });

	const onSubmit = async dataForm => {
		const response = await postNewPassword(userId, dataForm.password);
		if (response?.status !== 201) {
			dispatch(getModal({ component: '' }));
			dispatch(getAlert({ message: response?.data?.message, type: 'warning', isOpened: true }));
			return;
		}
		dispatch(getModal({ component: '' }));
		dispatch(getAlert({ message: response.data.message, type: 'success', isOpened: true }));
	};

	return (
		<Modal>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.block}>
				<h4 className={classes.title}>Создание пароля</h4>
				<InputAuth
					register={validatePassword(register)}
					label="Введите новый пароль:"
					validationText={errors.password ? errors.password.message : ''}
					input={{ id: 'new-password', autoComplete: 'new-password', type: 'password' }}
				/>
				<ButtonAuth>Сохранить</ButtonAuth>
			</form>
		</Modal>
	);
};

export default CreateNewPassword;
