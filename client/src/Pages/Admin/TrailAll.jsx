import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTrailsEdit, postDeleteTrail } from '../../api/trail';

import HTrailEdit from '../../Components/Helmets/HTrailEdit';
import TableTrails from '../../Components/Table/Trails/TableTrails';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/TrailAll.module.css';

const TrailAll = () => {
	const [trails, setTrails] = useState([]);
	const [trigger, setTrigger] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		getTrailsEdit().then(data => {
			setTrails(data.data.trails);
		});
	}, [trigger]);

	const deleteTrail = trailId => {
		const response = window.confirm('Подтвердите удаление новости');
		if (!response) {
			return dispatch(
				getAlert({ message: 'Отмена удаления маршрута', type: 'warning', isOpened: true })
			);
		}
		postDeleteTrail(trailId).then(data => {
			if (data.status === 200) {
				dispatch(getAlert({ message: 'Маршрут удалён', type: 'success', isOpened: true }));
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
			<HTrailEdit />
			<h2 className={classes.title}>Таблица выбора новости для редактирования</h2>
			<TableTrails trails={trails} deleteTrail={deleteTrail} />
		</section>
	);
};

export default TrailAll;
