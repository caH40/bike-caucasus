import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Adaptive } from '../../../Hoc/Adaptive';
import classes from '../Table.module.css';
import ThSort from '../EventsModerate/ThSort';

const TableResults = ({ results, setResults, removeLink }) => {
	const [sort, setSort] = useState({
		sortDirection: 'down',
		sortField: 'place',
	});

	const navigate = useNavigate();
	const toLink = athlete =>
		navigate(`/dzhilsu/results/athlete/${athlete}`, { state: { athlete } });
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
							<th scope="col">Отс.лид.</th>
							<Adaptive sizeScreen="sm">
								<th scope="col">Отс.пр.</th>
							</Adaptive>
							<Adaptive sizeScreen="lg">
								<ThSort
									sort={sort}
									setSort={setSort}
									data={results}
									setData={setResults}
									field={'birthday'}>
									Возр. гр.
								</ThSort>
								<th scope="col">Место гр</th>
							</Adaptive>
						</tr>
					</thead>
					<tbody>
						{results.map(result => (
							<tr
								key={result._id}
								onClick={() => (removeLink ? '' : toLink(result.athlete))}
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
								<td>{result.gap}</td>
								<Adaptive sizeScreen="sm">
									<td>{result.gapPrev}</td>
								</Adaptive>
								<Adaptive sizeScreen="lg">
									<td>{result.birthday}</td>
									<td></td>
								</Adaptive>
							</tr>
						))}
					</tbody>
				</table>
			) : undefined}
		</>
	);
};

export default TableResults;
