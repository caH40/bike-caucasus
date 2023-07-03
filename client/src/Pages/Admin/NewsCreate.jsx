import React from 'react';
import HNewsCreate from '../../Components/Helmets/HNewsCreate';
import FormNewsEdit from '../../Components/UI/FormNewsEdit/FormNewsEdit';

import classes from '../PagesCss/NewsCreate.module.css';

const NewsCreate = () => {
	return (
		<section className={classes.wrapper}>
			<HNewsCreate />
			<h2 className={classes.title}>Создание новости для главной страницы сайта</h2>
			<FormNewsEdit type="create" />
		</section>
	);
};

export default NewsCreate;
