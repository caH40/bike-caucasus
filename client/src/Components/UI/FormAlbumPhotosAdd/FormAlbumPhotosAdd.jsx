import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAlert } from '../../../redux/features/alertMessageSlice';
import ButtonSendBox from '../ButtonSendBox/ButtonSendBox';
import InputBox from '../InputBox/InputBox';

import classes from './FormAlbumPhotosAdd.module.css';
import { postPhotos } from '../../../api/gallery';
import InputFileReduceBox from '../InputFileReduceBox/InputFileReduceBox';
import ImagesURLBox from '../../ImagesURLBox/ImagesURLBox';

const FormAlbumPhotosAdd = ({ galleryId, albumId }) => {
	const [form, setForm] = useState({ galleryId, albumId, sources: [] });

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const sendForm = event => {
		event.preventDefault();

		if (!form.sources.length) {
			return dispatch(
				getAlert({ message: 'Не все поля заполнены!', type: 'warning', isOpened: true })
			);
		}

		postPhotos(form)
			.then(data => {
				if (data?.status === 200) {
					dispatch(getAlert({ message: data.data.message, type: 'success', isOpened: true }));
				}
				navigate('/admin/gallery/edit');
			})
			.catch(error => {
				dispatch(getAlert({ message: error.response.data.message, type: 'error', isOpened: true }));
			})
			.finally(() => {
				setForm({ sources: [] });
			});
	};

	return (
		<form className={classes.form}>
			<div className={classes.inner__picture}>
				<div className={classes.block__picture}>
					<InputBox
						form={form}
						keyObject="galleryId"
						setForm={setForm}
						title="ID галереи:"
						disabled={true}
					/>
					<InputBox
						form={form}
						keyObject="albumId"
						setForm={setForm}
						title="ID альбома:"
						disabled={true}
					/>
					<InputBox
						form={form}
						keyObject="authorPhoto"
						setForm={setForm}
						title="Автор фотографии:"
						disabled={true}
					/>
					<InputBox
						form={form}
						keyObject="urlAuthorPhoto"
						setForm={setForm}
						title="Ссылка на сайт автора фотографии:"
						disabled={true}
						multiple={true}
					/>
					<InputFileReduceBox
						setForm={setForm}
						// setPictureSource={setPictureSource}
						title="Загрузка фотографий для альбома:"
						type="text"
						multiple={true}
					/>
				</div>
				<ImagesURLBox form={form} setForm={setForm} keyObject="sources" />
			</div>
			<ButtonSendBox sendForm={sendForm} title="Сохранение галереи на сервере!" />
		</form>
	);
};

export default FormAlbumPhotosAdd;
