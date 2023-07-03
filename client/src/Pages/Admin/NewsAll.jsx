import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNewsEdit, postDeleteNews } from '../../api/news';
import HNewsEdit from '../../Components/Helmets/HNewsEdit';
import TableNews from '../../Components/Table/News/TableNews';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/NewsAll.module.css';

const NewsAll = () => {
	const [news, setNews] = useState([]);
	const [trigger, setTrigger] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		getNewsEdit().then(data => {
			setNews(data);
		});
	}, [trigger]);

	const deleteNews = newsId => {
		const response = window.confirm('Подтвердите удаление новости');
		if (!response) {
			return dispatch(
				getAlert({ message: 'Отмена удаления новости', type: 'warning', isOpened: true })
			);
		}
		postDeleteNews(newsId).then(data => {
			if (data.status === 200) {
				dispatch(getAlert({ message: 'Новость удалена', type: 'success', isOpened: true }));
				setTrigger(prev => !prev);
				return;
			}
		});
		dispatch(getAlert({ message: 'Что то пошло не так...', type: 'warning', isOpened: true }));
		setTrigger(prev => !prev);
		return;
	};

	return (
		<section className={classes.wrapper}>
			<HNewsEdit />
			<h2 className={classes.title}>Таблица выбора новости для редактирования</h2>
			<TableNews news={news} deleteNews={deleteNews} />
		</section>
	);
};

export default NewsAll;
