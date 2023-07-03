import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getResultsAthlete } from '../api/results';
import { getUser } from '../api/user';

import TableResultsAthlete from '../Components/Table/ResultsAthlete/TableResultsAthlete';
import Button from '../Components/UI/Button/Button';
import { mySort } from '../utils/mysort';

import classes from './PagesCss/Profile.module.css';

const Profile = () => {
	const [results, setResults] = useState([]);
	const [user, setUser] = useState({});
	const authUser = useSelector(state => state.checkAuth.value.user);

	const navigate = useNavigate();

	useEffect(() => {
		if (!authUser.id) return;
		getResultsAthlete(false, authUser.id).then(data => {
			const dataSorted = mySort(data, 'eventDate', 'down');
			setResults(dataSorted);
		});
		getUser().then(data => setUser(data.data.user));
	}, [authUser]);

	const editProfile = () => navigate('edit');
	return (
		<section className={classes.wrapper}>
			<h1 className={classes.title}>Профиль пользователя: {user.username}</h1>
			{user?._id ? (
				<div className={classes.inner}>
					<div className={classes.block}>
						<div className={classes.box__avatar}>
							<img
								className={classes.img__avatar}
								src={authUser.photoProfile || 'images/avatar.svg'}
								alt="avatar"
							/>
						</div>
						<Button getClick={editProfile}>Редактировать</Button>
					</div>

					<div className={classes.block}>
						<h2 className={classes.title__h2}>
							{user.lastName} {user.firstName}
						</h2>
						<div className={classes.box__bio}>
							<div className={classes.bio__data}>
								<span className={classes.bio__title}>Год рождения:</span>
								<span className={classes.bio__text}>{user.birthday}</span>
							</div>

							<div className={classes.bio__data}>
								<span className={classes.bio__title}>Пол:</span>
								<span className={classes.bio__text}>{user.gender}</span>
							</div>

							<div className={classes.bio__data}>
								<span className={classes.bio__title}>Возрастная группа:</span>
								<span className={classes.bio__text}>{user.birthday}</span>
							</div>

							<div className={classes.bio__data}>
								<span className={classes.bio__title}>Город:</span>
								<span className={classes.bio__text}>{user.city}</span>
							</div>

							<div className={classes.bio__data}>
								<span className={classes.bio__title}>Команда:</span>
								<span className={classes.bio__text}>{user.team}</span>
							</div>
							<div className={classes.bio__data}>
								<span className={classes.bio__title}>Телефон:</span>
								<span className={classes.bio__text}>{user.phone}</span>
							</div>
							<div className={classes.bio__data}>
								<span className={classes.bio__title}>E-mail:</span>
								<span className={classes.bio__text}>{user.email}</span>
							</div>
						</div>
					</div>

					<div className={classes.block}>
						<h2 className={classes.title__h2}>Участие в соревнованиях:</h2>
						<TableResultsAthlete results={results} setResults={setResults} />
					</div>
				</div>
			) : (
				'Loading...'
			)}
		</section>
	);
};

export default Profile;
