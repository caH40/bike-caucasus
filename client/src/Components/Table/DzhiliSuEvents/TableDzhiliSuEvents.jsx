import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Adaptive } from '../../../Hoc/Adaptive';
import classes from '../Table.module.css';
import ThSort from '../EventsModerate/ThSort';
import Button from '../../UI/Button/Button';

const TableDzhiliSuEvents = ({ events, setEvents }) => {
	const [sort, setSort] = useState({
		sortDirection: 'up',
		sortField: 'eventDate',
	});

	const navigate = useNavigate();
	const toLink = eventId => navigate(`results/${eventId}`);
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
				</tr>
			</thead>
			<tbody>
				{events.map((event, index) => (
					<tr key={event._id} onClick={() => toLink(event._id)} className={classes.pointer}>
						<td>{index + 1}</td>
						<td>{event.eventDate}</td>
						<td className={classes.align__left}>{event.eventName}</td>
						<Adaptive sizeScreen="lg">
							<td>{event.eventCity}</td>
						</Adaptive>
						<td>{event.quantityRiders}</td>
						<Adaptive sizeScreen="sm">
							<td>
								<Button
									additionalClasses="td__link strava"
									getClick={() => window.open(event.segmentStrava)}>
									Strava
								</Button>
							</td>
						</Adaptive>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TableDzhiliSuEvents;
