import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Adaptive } from '../../../Hoc/Adaptive';
import classes from '../Table.module.css';
import ThSort from '../EventsModerate/ThSort';
import Button from '../../UI/Button/Button';

const TableResultsAthlete = ({ results, setResults }) => {
	const [sort, setSort] = useState({
		sortDirection: 'down',
		sortField: 'eventDate',
	});
	const navigate = useNavigate();
	const toLink = (eventId, eventName) =>
		navigate(`/dzhilsu/results/${eventId}`, { state: { eventName } });

	return (
		<table>
			<thead>
				<tr>
					<ThSort
						sort={sort}
						setSort={setSort}
						data={results}
						setData={setResults}
						field={'eventDate'}>
						Дата
					</ThSort>
					<th scope="col">Соревнование</th>
					<Adaptive sizeScreen="lg">
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'distance'}>
							Дистанция
						</ThSort>
					</Adaptive>
					<ThSort sort={sort} setSort={setSort} data={results} setData={setResults} field={'place'}>
						Место
					</ThSort>
					<Adaptive sizeScreen="sm">
						<ThSort
							sort={sort}
							setSort={setSort}
							data={results}
							setData={setResults}
							field={'timeTotal'}>
							Время
						</ThSort>

						<th scope="col">Сегмент в Страве</th>
					</Adaptive>
				</tr>
			</thead>
			<tbody>
				{results.map(result => (
					<tr
						key={result._id}
						onClick={() => toLink(result.eventId, result.eventName)}
						className={classes.pointer}>
						<td>{result.eventDate}</td>
						<td className={classes.align__left}>{result.eventName}</td>
						<Adaptive sizeScreen="lg">
							<td>{result.distance}</td>
						</Adaptive>
						<td>{result.place}</td>
						<Adaptive sizeScreen="sm">
							<td>{result.timeTotal}</td>
							<td>
								<Button
									additionalClasses="td__link strava"
									getClick={() => window.open(result.segmentStrava)}>
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

export default TableResultsAthlete;
