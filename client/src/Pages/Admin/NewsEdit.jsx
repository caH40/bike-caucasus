import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNewsOne } from '../../api/news';
import HNewsEdit from '../../Components/Helmets/HNewsEdit';
import FormNewsEdit from '../../Components/UI/FormNewsEdit/FormNewsEdit';

import classes from '../PagesCss/NewsEdit.module.css';

const NewsEdit = () => {
	const [newsOne, setNewsOne] = useState([]);

	const { newsId } = useParams({});

	useEffect(() => {
		getNewsOne(newsId).then(data => {
			setNewsOne(data);
		});
	}, [newsId]);

	return (
		<section className={classes.wrapper}>
			{newsOne._id ? (
				<>
					<HNewsEdit />
					<h2 className={classes.title}>Редактирование новости</h2>
					<FormNewsEdit newsOne={newsOne} type="edit" />
				</>
			) : (
				''
			)}
		</section>
	);
};

export default NewsEdit;
