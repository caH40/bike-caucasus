import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGalleries, postDeleteGallery } from '../../api/gallery';
import TableGallery from '../../Components/Table/Gallery/TableGallery';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/NewsCreate.module.css';

const GalleryEdit = () => {
	const [galleries, setGalleries] = useState([]);
	const [trigger, setTrigger] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		getGalleries().then(data => {
			setGalleries(data.data.galleries);
		});
	}, [trigger]);

	const deleteGallery = (galleryId, galleryName) => {
		const confirm = window.confirm(
			`Вы действительно хотите удалить галерею "${galleryName}"?\nВсе альбомы и фотографии из данной галереи будут удалены, без возможности их восстановления!`
		);
		if (!confirm)
			return dispatch(
				getAlert({
					message: `Отмена удаления галереи "${galleryName}"`,
					type: 'warning',
					isOpened: true,
				})
			);
		postDeleteGallery(galleryId)
			.then(data => {
				dispatch(getAlert({ message: data.data?.message, type: 'success', isOpened: true }));
			})
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при удалении галереи на сервере!',
						type: 'error',
						isOpened: true,
					})
				);
			})
			.finally(() => setTrigger(prev => !prev));
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование галереи</h2>
			<TableGallery galleries={galleries} deleteGallery={deleteGallery} />
		</section>
	);
};

export default GalleryEdit;
