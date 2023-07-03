import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhotos, postDeletePhoto } from '../../../api/gallery';
import ButtonClose from '../../../Components/UI/ButtonClose/ButtonClose';
import { getAlert } from '../../../redux/features/alertMessageSlice';

import classes from './PhotosDelete.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const PhotosDelete = () => {
	const [photos, setPhotos] = useState([]);

	const { albumId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		getPhotos(albumId).then(data => setPhotos(data.data.photos));
	}, [albumId]);

	const deletePhoto = photoId => {
		const confirm = window.confirm(`Вы действительно хотите удалить фотографию?`);
		if (!confirm)
			return dispatch(
				getAlert({
					message: `Отмена удаления фотографии`,
					type: 'warning',
					isOpened: true,
				})
			);
		postDeletePhoto(photoId)
			.then(data => {
				setPhotos(data.data.photos);
				dispatch(getAlert({ message: data.data?.message, type: 'success', isOpened: true }));
			})
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при удалении фотографии на сервере!',
						type: 'error',
						isOpened: true,
					})
				);
			});
	};

	const nameAlbum = photos[0]?.albumId.name;
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>{`Удаление фотографий из альбома "${nameAlbum}"`}</h2>
			<div className={classes.inner}>
				{photos.length
					? photos.map(photo => (
							<div className={classes.images} key={photo._id}>
								<img
									className={classes.img}
									src={`${server}/${photo.urlPhotoMedium}`}
									alt={photo.albumId.name}
								/>
								<div className={classes.img__info}>Автор: {photo.creatorId.username}</div>
								<div className={classes.cross__info}>
									<ButtonClose getClick={() => deletePhoto(photo._id)} />
								</div>
							</div>
					  ))
					: 'Loading...'}
			</div>
		</section>
	);
};

export default PhotosDelete;
