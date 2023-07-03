import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { deletePostResult, getResults } from '../../api/results';
import { TableResultsEdit } from '../../Components/Table/ResultsEdit/TableResultsEdit';
import Button from '../../Components/UI/Button/Button';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/EventResultsEdit.module.css';

const EventResultsEdit = () => {
	const [results, setResults] = useState([]);
	const [trigger, setTrigger] = useState(false);

	const { eventId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		getResults(eventId).then(data => setResults(data));
	}, [eventId, trigger]);

	const editResult = resultId => {
		navigate(`/admin/events/edit/result/${resultId}`);
	};

	const addResult = () => {
		navigate(`/admin/events/edit/result/add/${results[0].eventId}`);
	};

	const deleteResult = resultId => {
		const athleteName = results.find(result => result._id === resultId)?.athlete;
		const confirm = window.confirm(`Вы действительно хотите удалить результат "${athleteName}"`);
		if (!confirm)
			return dispatch(
				getAlert({
					message: `Отмена удаления результата "${athleteName}"`,
					type: 'warning',
					isOpened: true,
				})
			);
		deletePostResult(resultId)
			.then(data => {
				dispatch(getAlert({ message: data.data.message, type: 'success', isOpened: true }));
			})
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при удалении результата на сервере!',
						type: 'error',
						isOpened: true,
					})
				);
			})
			.finally(() => setTrigger(prev => !prev));
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование результатов соревнования</h2>
			<TableResultsEdit
				results={results}
				setResults={setResults}
				getClick={editResult}
				deleteResult={deleteResult}
			/>
			<Button getClick={addResult} additionalClasses="mr-20">
				Добавить результат
			</Button>
			<Button getClick={() => navigate(-1)} additionalClasses="warning">
				Назад
			</Button>
		</section>
	);
};

export default EventResultsEdit;
