import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlums, postDeleteAlbum } from '../../api/gallery';
import TableAlbums from '../../Components/Table/Albums/TableAlbums';
import Button from '../../Components/UI/Button/Button';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/NewsCreate.module.css';

const AlbumsEdit = () => {
	const [albums, setAlbums] = useState([]);
	const [trigger, setTrigger] = useState(false);

	const dispatch = useDispatch();
	const { galleryId } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getAlums(galleryId).then(data => {
			setAlbums(data.data.albums);
		});
	}, [galleryId, trigger]);

	const getBack = () => navigate(-1);
	const addAlbum = () => navigate(`add`);

	const deleteAlbum = (albumId, albumName) => {
		const confirm = window.confirm(`Вы действительно хотите удалить альбом "${albumName}"?`);
		if (!confirm)
			return dispatch(
				getAlert({
					message: `Отмена удаления альбома`,
					type: 'warning',
					isOpened: true,
				})
			);
		postDeleteAlbum(albumId)
			.then(data => {
				dispatch(getAlert({ message: data.data?.message, type: 'success', isOpened: true }));
			})
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при удалении альбома на сервере!',
						type: 'error',
						isOpened: true,
					})
				);
			})
			.finally(() => setTrigger(prev => !prev));
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование альбомов</h2>
			{albums.length ? <TableAlbums albums={albums} deleteAlbum={deleteAlbum} /> : 'Loading...'}
			<div className={classes.box__buttons}>
				<Button getClick={getBack}>Назад</Button>
				<Button getClick={addAlbum}>Добавить альбом</Button>
			</div>
		</section>
	);
};

export default AlbumsEdit;
