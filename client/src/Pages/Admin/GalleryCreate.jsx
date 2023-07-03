import React from 'react';
import FormGalleryEdit from '../../Components/UI/FormGalleryEdit/FormGalleryEdit';

import classes from '../PagesCss/NewsCreate.module.css';

const GalleryCreate = () => {
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Создание категории галереи</h2>
			<FormGalleryEdit type="create" />
		</section>
	);
};

export default GalleryCreate;
