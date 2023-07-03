import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utils/date';

import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';

const TableUserEdit = ({ users, deleteUser }) => {
	const navigate = useNavigate();

	return (
		<table className={classes.table}>
			<thead>
				<tr>
					<th>#</th>
					<th>Регист.</th>
					<th>username</th>
					<th>email</th>
					<th>phone</th>
					<th>firstName</th>
					<th>lastName</th>
					<th>firstName</th>
					<th>gender</th>
					<th>birth</th>
					<th>city</th>
					<th>team</th>
					<th>role</th>
					<th>Редактировать</th>
					<th>Удалить акк.</th>
				</tr>
			</thead>
			<tbody>
				{users.map((user, index) => (
					<tr key={user._id} className={classes.text__13}>
						<td>{index + 1}</td>
						<td>{formatDate(user.date, '2-digit')}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>{user.phone}</td>
						<td>{user.firstName}</td>
						<td>{user.lastName}</td>
						<td>{user.firstName}</td>
						<td>{user.gender}</td>
						<td>{user.birthday}</td>
						<td>{user.city}</td>
						<td>{user.team}</td>
						<td>{user.role}</td>
						<td>
							<Button getClick={() => navigate(user._id)} additionalClasses="td__link">
								Редактировать
							</Button>
						</td>
						<td>
							<Button
								getClick={() => deleteUser(user._id)}
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

export default TableUserEdit;
