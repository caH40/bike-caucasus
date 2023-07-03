import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postResults } from '../../api/protocol';
import TableEvent from '../../Components/Table/EventUpdate/TableEvent';
import TableResults from '../../Components/Table/Results/TableResults';
import Button from '../../Components/UI/Button/Button';

import { InputFileXlsBox } from '../../Components/UI/InputFileXlsBox/InputFileXlsBox';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/Events.module.css';

const Events = () => {
	const [results, setResults] = useState([]);
	const [event, setEvent] = useState({});
	const [file, setFile] = useState({});
	const resetRef = useRef('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const saveResults = () => {
		postResults(results, event)
			.then(data => {
				if (data.status === 201) {
					dispatch(
						getAlert({
							message: 'Протокол соревнований сохранен на сервере!',
							type: 'success',
							isOpened: true,
						})
					);
					navigate('/admin/events/edit');
					return;
				}
			})
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при сохранении протокола нас сервере!',
						type: 'error',
						isOpened: true,
					})
				);
			});
	};

	const clearStates = () => {
		setEvent({});
		setResults([]);
		setFile({});
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Загрузка протоколов соревнований</h2>
			<article></article>
			<InputFileXlsBox
				file={file}
				setFile={setFile}
				resetRef={resetRef}
				setResults={setResults}
				event={event}
				setEvent={setEvent}
				title={'Загрузка протокола  в формате .xlsx'}
				keyObject={'protocol'}
				accept={'.xlsx'}
			/>
			<TableEvent event={event} />
			<TableResults results={results} setResults={setResults} removeLink={true} />
			{results.length ? (
				<>
					<Button getClick={saveResults} additionalClasses="mr-20">
						Сохранить
					</Button>
					<Button getClick={clearStates} additionalClasses="mr-20">
						Отменить
					</Button>
				</>
			) : undefined}
		</section>
	);
};

export default Events;
