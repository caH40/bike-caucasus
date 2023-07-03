import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';

const TableTrails = ({ trails, deleteTrail }) => {
	const navigate = useNavigate();

	return (
		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Дата</th>
					<th>Изображение</th>
					<th>Название</th>
					<th>Создатель</th>
					<th>Редактировать</th>
					<th>Удаление</th>
				</tr>
			</thead>
			<tbody>
				{trails.map((trail, index) => (
					<tr key={trail._id}>
						<td>{index + 1}</td>
						<td>{new Date(trail.date).toLocaleDateString()}</td>
						<td>
							<img className={classes.td__news__image} src={trail.cardPhoto} alt="news"></img>
						</td>
						<td className={classes.align__left}>{trail.nameRoute}</td>
						<td>{trail.postedBy?.username}</td>
						<td>
							<Button getClick={() => navigate(trail._id)} additionalClasses="td__link">
								Редактировать
							</Button>
						</td>
						<td>
							<Button
								getClick={() => deleteTrail(trail._id)}
								targetClass="warning"
								additionalClasses="td__link">
								Удалить
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableTrails;
