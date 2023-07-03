import React from 'react';
import { Adaptive } from '../../../Hoc/Adaptive';
import classes from '../Table.module.css';

const TableEvent = ({ event }) => {
	return (
		<>
			{event?.eventName ? (
				<table>
					<thead>
						<tr>
							<th>#</th>
							<th>Дата</th>
							<th>Соревнование</th>
							<Adaptive sizeScreen="lg">
								<th>Город</th>
							</Adaptive>
							<th>Дистанция</th>
							<th>Тип</th>
							<th>Участ.</th>
							<Adaptive sizeScreen="sm">
								<th>Сегмент в Страве</th>
							</Adaptive>
						</tr>
					</thead>
					<tbody>
						<tr key={event._id}>
							<td>{1}</td>
							<td>{event.eventDate}</td>
							<td className={classes.align__left}>{event.eventName}</td>
							<Adaptive sizeScreen="lg">
								<td>{event.eventCity}</td>
							</Adaptive>
							<td>{event.distance}</td>
							<td>{event.type}</td>
							<td>{event.quantityRiders}</td>
							<Adaptive sizeScreen="sm">
								<td>
									<a
										className={classes.link__btn}
										href={`https://${event.segmentStrava}`}
										target="_blank"
										rel="noreferrer"
									>
										Strava
									</a>
								</td>
							</Adaptive>
						</tr>
					</tbody>
				</table>
			) : undefined}
		</>
	);
};

export default TableEvent;
