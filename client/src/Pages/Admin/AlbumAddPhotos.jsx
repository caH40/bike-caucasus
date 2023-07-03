import React from 'react';
import { useParams } from 'react-router-dom';
import FormAlbumPhotosAdd from '../../Components/UI/FormAlbumPhotosAdd/FormAlbumPhotosAdd';

import classes from '../PagesCss/NewsCreate.module.css';

const AlbumAddPhotos = () => {
	const { galleryId, albumId } = useParams();

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Добавление фотографий в альбом</h2>
			<FormAlbumPhotosAdd galleryId={galleryId} albumId={albumId} />
		</section>
	);
};

export default AlbumAddPhotos;
