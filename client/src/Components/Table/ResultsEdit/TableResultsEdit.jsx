import React, { useState } from 'react';

import { Adaptive } from '../../../Hoc/Adaptive';
import classes from '../Table.module.css';
import ThSort from '../EventsModerate/ThSort';
import Button from '../../UI/Button/Button';

export const TableResultsEdit = ({
	results,
	setResults,
	getClick,
	removeLink,
	deleteResult,
}) => {
	const [sort, setSort] = useState({
		sortDirection: 'down',
		sortField: 'place',
	});

	return (
		<>
			{results?.length ? (
				<table className="table tableResult">
					<thead>
						<tr>
							<ThSort
								sort={sort}
								setSort={setSort}
								data={results}
								setData={setResults}
								field={'place'}>
								#
							</ThSort>
							<Adaptive sizeScreen="lg">
								<ThSort
									sort={sort}
									setSort={setSort}
									data={results}
									setData={setResults}
									field={'number'}>
									Номер
								</ThSort>
							</Adaptive>
							<ThSort
								sort={sort}
								setSort={setSort}
								data={results}
								setData={setResults}
								field={'athlete'}>
								Участник
							</ThSort>
							<Adaptive sizeScreen="sm">
								<ThSort
									sort={sort}
									setSort={setSort}
									data={results}
									setData={setResults}
									field={'athleteCity'}>
									Город
								</ThSort>
							</Adaptive>
							<Adaptive sizeScreen="lg">
								<ThSort
									sort={sort}
									setSort={setSort}
									data={results}
									setData={setResults}
									field={'athleteTeam'}>
									Команда
								</ThSort>
								<ThSort
									sort={sort}
									setSort={setSort}
									data={results}
									setData={setResults}
									field={'distance'}>
									Дистанция
								</ThSort>
							</Adaptive>
							<ThSort
								sort={sort}
								setSort={setSort}
								data={results}
								setData={setResults}
								field={'timeTotal'}>
								Время
							</ThSort>
							<th>Год рождения</th>
							<th>userId</th>
							<th>Удаление результата</th>
						</tr>
					</thead>
					<tbody>
						{results.map(result => (
							<tr
								key={result._id}
								onClick={() => (removeLink ? '' : getClick(result._id))}
								className={classes.pointer}>
								<td>{result.place}</td>
								<Adaptive sizeScreen="lg">
									<td>{result.number}</td>
								</Adaptive>
								<td className={classes.align__left}>{result.athlete}</td>
								<Adaptive sizeScreen="sm">
									<td>{result.athleteCity}</td>
								</Adaptive>
								<Adaptive sizeScreen="lg">
									<td>{result.athleteTeam}</td>
									<td>{result.distance}</td>
								</Adaptive>
								<td>{result.timeTotal}</td>

								<td>{result.birthday}</td>
								<td>{result.userId}</td>
								<td>
									<Button getClick={() => deleteResult(result._id)} additionalClasses="warning td__link">
										Удалить
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : undefined}
		</>
	);
};
