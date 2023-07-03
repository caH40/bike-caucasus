import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getUserForModerate, moderateUserData } from '../../api/user';
import ImageAvatarBox from '../../Components/ImageAvatarBox/ImageAvatarBox';
import ButtonSendBox from '../../Components/UI/ButtonSendBox/ButtonSendBox';
import InputBox from '../../Components/UI/InputBox/InputBox';
import InputFileURLBox from '../../Components/UI/InputFileURLBox/InputFileURLBox';
import SelectBox from '../../Components/UI/SelectBox/SelectBox';
import { resetUserForm, valuesGender, valuesRole } from '../../utils/variables';

import classes from '../PagesCss/UsersEdit.module.css';

const UsersEdit = () => {
	const [form, setForm] = useState(() => resetUserForm);
	const { userId } = useParams();
	const navigation = useNavigate();

	useEffect(() => {
		getUserForModerate(userId).then(data =>
			setForm(prev => ({
				...prev,
				...data.data.user,
				photoProfile: { source: data.data.user.photoProfile },
			}))
		);
	}, [userId]);

	const sendForm = e => {
		e.preventDefault();
		moderateUserData(form, userId).then(data => {
			setForm(prev => ({ ...prev, ...resetUserForm }));
			navigation('/admin/users');
		});
	};
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование данных пользователи</h2>
			<form className={classes.form}>
				<div className={classes.block}>
					<InputBox
						title="username"
						form={form}
						setForm={setForm}
						keyObject="username"
						type="text"
						boxClass="mr-10"
						disabled={true}
					/>
					<SelectBox
						title="role*"
						form={form}
						setForm={setForm}
						keyObject="role"
						type="text"
						values={valuesRole}
						boxClass="mr-10"
					/>
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
					<SelectBox
						title="Пол*"
						form={form}
						setForm={setForm}
						keyObject="gender"
						type="text"
						values={valuesGender}
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

export default UsersEdit;
