import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAlert } from '../../../redux/features/alertMessageSlice';
import ImageBox from '../../ImageBox/ImageBox';
import ButtonSendBox from '../ButtonSendBox/ButtonSendBox';
import InputBox from '../InputBox/InputBox';

import classes from './FormGalleryEdit.module.css';
import { postGallery } from '../../../api/gallery';
import InputFileReduceBox from '../InputFileReduceBox/InputFileReduceBox';

const FormGalleryEdit = () => {
	const [form, setForm] = useState({});
	const [pictureSource, setPictureSource] = useState({});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const sendForm = event => {
		event.preventDefault();
		const isCompleteSource = form.base64Image ? true : false;
		if (!isCompleteSource || !form.name || !form.nameDir) {
			return dispatch(
				getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true })
			);
		}

		postGallery(form)
			.then(data => {
				if (data?.status === 200) {
					dispatch(getAlert({ message: data.data.message, type: 'success', isOpened: true }));
				}
				navigate('/gallery');
			})
			.catch(error => {
				dispatch(getAlert({ message: error.response.data.message, type: 'error', isOpened: true }));
			})
			.finally(() => {
				setForm({ name: '', nameDir: '', base64Image: '' });
				setPictureSource({});
			});
	};

	return (
		<form className={classes.form}>
			<div className={classes.inner__picture}>
				<div className={classes.block__picture}>
					<InputBox form={form} keyObject="name" setForm={setForm} title="Заголовок галереи:" />
					<InputBox
						form={form}
						keyObject="nameDir"
						setForm={setForm}
						title="Название папки на сервере:"
					/>
					<InputFileReduceBox
						setForm={setForm}
						setPictureSource={setPictureSource}
						title="Обложка для галереи:"
						type="text"
					/>
				</div>
				<ImageBox pictureSource={pictureSource} setPictureSource={setPictureSource} />
			</div>
			<ButtonSendBox sendForm={sendForm} title="Сохранение галереи на сервере!" />
		</form>
	);
};

export default FormGalleryEdit;
