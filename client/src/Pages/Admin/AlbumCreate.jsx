import React from 'react';
import { useParams } from 'react-router-dom';
import FormAlbumAdd from '../../Components/UI/FormAlbumAdd/FormAlbumAdd';

import classes from '../PagesCss/NewsCreate.module.css';

const AlbumCreate = () => {
	const { galleryId } = useParams();

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Добавление альбома в галерею</h2>
			<FormAlbumAdd galleryId={galleryId} />
		</section>
	);
};

export default AlbumCreate;
