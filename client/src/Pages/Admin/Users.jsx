import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers, postDeleteUser } from '../../api/user';
import TableUserEdit from '../../Components/Table/Users/TableUserEdit';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/Users.module.css';

const Users = () => {
	const [users, setUsers] = useState([]);
	const [trigger, setTrigger] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		getUsers().then(data => setUsers(data.data.users));
	}, [trigger]);

	const deleteUser = userId => {
		const response = window.confirm('Подтвердите удаление аккаунта пользователя');
		if (!response)
			return dispatch(
				getAlert({
					message: 'Отмена удаления аккаунта пользователя',
					type: 'warning',
					isOpened: true,
				})
			);

		postDeleteUser(userId).then(data => {
			if (data.status === 200) {
				dispatch(
					getAlert({ message: 'Аккаунт пользователя удалён', type: 'success', isOpened: true })
				);
				setTrigger(prev => !prev);
				return true;
			}
		});
		dispatch(getAlert({ message: 'Что то пошло не так...', type: 'warning', isOpened: true }));
		setTrigger(prev => !prev);
		return true;
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Зарегистрированные пользователи</h2>
			<TableUserEdit users={users} deleteUser={deleteUser} />
		</section>
	);
};

export default Users;
