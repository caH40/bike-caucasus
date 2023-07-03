import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, postUserData } from '../api/user';
import ImageAvatarBox from '../Components/ImageAvatarBox/ImageAvatarBox';
import ButtonSendBox from '../Components/UI/ButtonSendBox/ButtonSendBox';
import InputBox from '../Components/UI/InputBox/InputBox';
import InputFileURLBox from '../Components/UI/InputFileURLBox/InputFileURLBox';
import { getAlert } from '../redux/features/alertMessageSlice';
import { getAuth } from '../redux/features/authSlice';

import classes from './PagesCss/ProfileEdit.module.css';
import { checkUserForm, resetFormProfile } from './service';

const ProfileEdit = () => {
	const [form, setForm] = useState(() => resetFormProfile);

	const dispatch = useDispatch();
	const navigation = useNavigate();

	useEffect(() => {
		getUser().then(data =>
			setForm(prev => ({
				...prev,
				...data.data.user,
				photoProfile: { source: data.data.user.photoProfile },
			}))
		);
	}, []);
	const sendForm = e => {
		e.preventDefault();
		const isFilledFields = checkUserForm(form);
		if (!isFilledFields) {
			return dispatch(
				getAlert({
					message: 'Необходимо заполнить все поля со звездочкой*',
					type: 'warning',
					isOpened: true,
				})
			);
		}
		postUserData(form).then(data => {
			setForm(prev => ({ ...prev, ...resetFormProfile }));
			dispatch(getAuth({ status: true, user: data?.data?.user }));
			navigation('/profile');
		});
	};

	return (
		<section className={classes.wrapper}>
			<h1 className={classes.title}>Редактирование личных данных пользователя: {form.username}</h1>
			<form className={classes.form}>
				<div className={classes.block}>
					<InputBox
						title="Фамилия*"
						form={form}
						setForm={setForm}
						keyObject="lastName"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Имя*"
						form={form}
						setForm={setForm}
						keyObject="firstName"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Отчество"
						form={form}
						setForm={setForm}
						keyObject="patronymic"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Год рождения*"
						form={form}
						setForm={setForm}
						keyObject="birthday"
						type="number"
						boxClass="mr-10"
					/>
					<InputBox
						title="Пол*"
						form={form}
						setForm={setForm}
						keyObject="gender"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Город"
						form={form}
						setForm={setForm}
						keyObject="city"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Команда"
						form={form}
						setForm={setForm}
						keyObject="team"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Контактный телефон"
						form={form}
						setForm={setForm}
						keyObject="phone"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Адрес электронной почты"
						form={form}
						setForm={setForm}
						keyObject="email"
						type="text"
						boxClass="mr-10"
						disabled={true}
					/>
				</div>
				<div className={classes.block__avatar}>
					<InputFileURLBox
						title="Картинка профиля"
						form={form}
						setForm={setForm}
						keyObject="photoProfile"
						boxClass="mr-10"
					/>
					<div className={classes.box__avatar}>
						<ImageAvatarBox form={form} setForm={setForm} keyObject="photoProfile" />
					</div>
				</div>
				<div className={classes.box__button}>
					<ButtonSendBox title="Сохранение введенных данных" sendForm={sendForm} boxClass="mr-10" />
				</div>
			</form>
		</section>
	);
};

export default ProfileEdit;
