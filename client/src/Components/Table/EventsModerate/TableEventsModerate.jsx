import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getEvents } from '../../../api/events';
import { postDeleteEvent } from '../../../api/protocol';
import { Adaptive } from '../../../Hoc/Adaptive';
import { getAlert } from '../../../redux/features/alertMessageSlice';
import { mySort } from '../../../utils/mysort';
import Button from '../../UI/Button/Button';
import classes from '../Table.module.css';
import ThSort from './ThSort';

const TableEventsModerate = () => {
	const [sort, setSort] = useState({
		sortDirection: 'up',
		sortField: 'eventDate',
	});
	const [events, setEvents] = useState([]);
	const [trigger, setTrigger] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const deleteEvent = (eventId, eventName) => {
		const isConfirmed = window.confirm(
			`Вы действительно хотите удалить протокол соревнования "${eventName}"`
		);
		if (!isConfirmed)
			return dispatch(
				getAlert({
					message: 'Отмена удаления протокола соревнования',
					type: 'warning',
					isOpened: true,
				})
			);
		postDeleteEvent(eventId).then(data => {
			dispatch(getAlert({ message: data.data.message, type: 'success', isOpened: true }));
			setTrigger(prev => !prev);
		});
	};

	useEffect(() => {
		getEvents().then(data => {
			if (!data) return;
			const dataSorted = mySort(data, 'eventDate', 'up');
			setEvents(dataSorted);
		});
	}, [dispatch, trigger]);

	// const toLink = eventId => navigate(`results/${eventId}`);
	return (
		<table>
			<thead>
				<tr>
					<th scope="col">#</th>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={events}
						setData={setEvents}
						field={'eventDate'}>
						Дата
					</ThSort>
					<th scope="col">Соревнование</th>
					<Adaptive sizeScreen="lg">
						<th scope="col">Город</th>
					</Adaptive>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={events}
						setData={setEvents}
						field={'quantityRiders'}>
						Участ.
					</ThSort>
					<Adaptive sizeScreen="sm">
						<th scope="col">Сегмент в Страве</th>
					</Adaptive>
					<th>Редактирование описания</th>
					<th>Редактирование результатов</th>
					<th>Удаление</th>
				</tr>
			</thead>
			<tbody>
				{events.map((event, index) => (
					<tr key={event._id}>
						<td>{index + 1}</td>
						<td>{event.eventDate}</td>
						<td className={classes.align__left}>{event.eventName}</td>
						<Adaptive sizeScreen="lg">
							<td>{event.eventCity}</td>
						</Adaptive>
						<td>{event.quantityRiders}</td>
						<Adaptive sizeScreen="sm">
							<td>
								<a
									className={classes.link__btn}
									href={event.segmentStrava}
									target="_blank"
									rel="noreferrer">
									Strava
								</a>
							</td>
						</Adaptive>
						<td>
							<Button getClick={() => navigate(event._id)} additionalClasses="td__link">
								Редактировать
							</Button>
						</td>
						<td>
							<Button getClick={() => navigate(`results/${event._id}`)} additionalClasses="td__link">
								Редактировать
							</Button>
						</td>
						<td>
							<Button
								getClick={() => deleteEvent(event._id, event.eventName)}
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

export default TableEventsModerate;
