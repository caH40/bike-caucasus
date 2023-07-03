import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postFromTrail, postTrek } from '../../../api/trail';
import { getAlert } from '../../../redux/features/alertMessageSlice';
import ImagesURLBox from '../../ImagesURLBox/ImagesURLBox';
import ImageURLBox from '../../ImageURLBox/ImageURLBox';
import ButtonSendBox from '../ButtonSendBox/ButtonSendBox';

import InputBox from '../InputBox/InputBox';
import InputFilesURLBox from '../InputFilesURLBox/InputFilesURLBox';
import InputFileTrekBox from '../InputFileTrekBox/InputFileTrekBox';
import InputFileURLBox from '../InputFileURLBox/InputFileURLBox';
import SelectBox from '../SelectBox/SelectBox';
import TextArea from '../TextArea/TextArea';

import classes from './FormTrailEdit.module.css';
import { createFormData, resetForm, validate } from './service';

const FormTrailEdit = ({ trail, type }) => {
	const [form, setForm] = useState(() => {
		if (!trail) return resetForm;
		const newTrail = { ...trail, cardPhoto: { source: trail.cardPhoto } };
		const descPhotos = trail.descPhoto.map((photo, index) => ({
			source: photo,
			name: `name-${index}`,
		}));
		return { ...newTrail, descPhoto: trail.descPhotos, descPhotos };
	});

	const fileTrek = useRef(trail ? { old: trail.fileTrekName } : '');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const sendForm = event => {
		event.preventDefault();

		const isValidate = validate(form);
		if (!isValidate)
			return dispatch(
				getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true })
			);

		if (!fileTrek.old) {
			const formData = createFormData(fileTrek.current.source);
			postTrek(formData).catch(error => console.log(error));
		}

		postFromTrail(form, type)
			.then(data => {
				if (data?.status === 200) {
					dispatch(
						getAlert({ message: 'Маршрут сохранен на сервере!', type: 'success', isOpened: true })
					);
				}
				navigate(`/trails/${data.data.trailId}`);
			})
			.finally(() => {
				fileTrek.current = '';
				setForm(resetForm);
			});
	};

	return (
		<form className={classes.form}>
			<div className={classes.block}>
				<SelectBox
					form={form}
					setForm={setForm}
					keyObject="state"
					title="Республика маршрута:"
					values={[
						{ id: 0, name: '' },
						{ id: 1, name: 'КавМинВоды' },
						{ id: 2, name: 'Карачаево-Черкессия' },
						{ id: 3, name: 'Кабардино-Балкария' },
						{ id: 4, name: 'Северная Осетия' },
						{ id: 5, name: 'Адыгея' },
					]}
					boxClass="mr-10"
				/>
				<SelectBox
					form={form}
					setForm={setForm}
					keyObject="bikeType"
					title="Тип активности:"
					values={[
						{ id: 0, name: '' },
						{ id: 1, name: 'Шоссейный' },
						{ id: 2, name: 'Горный' },
					]}
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="nameRoute"
					title="Название маршрута:"
					type="text"
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="start"
					title="Место старта маршрута:"
					type="text"
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="turn"
					title="Место разворота:"
					type="text"
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="finish"
					title="Место финиша маршрута:"
					type="text"
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="distance"
					title="Длина маршрута в километрах:"
					type="number"
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="ascent"
					title="Общий набор в метрах на маршруте:"
					type="number"
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="urlTrekGConnect"
					title="Ссылка на маршрут в GConnect:"
					type="text"
					boxClass="mr-10"
				/>
				<InputBox
					form={form}
					setForm={setForm}
					keyObject="urlVideo"
					title="Ссылка на видео с маршрута:"
					type="text"
					boxClass="mr-10"
				/>
				<InputFileTrekBox
					fileRef={fileTrek}
					keyObject="fileTrekName"
					setForm={setForm}
					title="Трек в формате FIT/GPX/TCX:"
					boxClass="mr-10"
				/>
				<TextArea
					form={form}
					setForm={setForm}
					title="Блок подробного описание маршрута. Особенности, детали, достопримечательности, важные моменты на маршруте."
					keyObject="descriptionArea"
					boxClass="mr-10"
				/>
			</div>

			<div className={classes.block}>
				<InputFileURLBox
					form={form}
					setForm={setForm}
					title="Картинка для карточки:"
					keyObject="cardPhoto"
					boxClass="mr-10"
				/>
				<ImageURLBox form={form} setForm={setForm} keyObject="cardPhoto" />
			</div>
			<InputFilesURLBox
				form={form}
				setForm={setForm}
				title="Картинки для описания:"
				boxClass="mr-10"
			/>
			<ImagesURLBox form={form} setForm={setForm} boxClass="mr-10" />
			<ButtonSendBox sendForm={sendForm} title="Отправка формы на сервер!" />
		</form>
	);
};

export default FormTrailEdit;
