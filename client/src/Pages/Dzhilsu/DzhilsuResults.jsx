import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getResults } from '../../api/results';
import HDzhilsuResults from '../../Components/Helmets/HDzhilsuResults';
import TableResults from '../../Components/Table/Results/TableResults';
import Button from '../../Components/UI/Button/Button';
import { mySort } from '../../utils/mysort';

const DzhilsuResults = () => {
	const [results, setResults] = useState([]);
	const { eventId } = useParams();

	useEffect(() => {
		getResults(eventId).then(data => {
			const dataSorted = mySort(data, 'place', 'down');
			setResults(dataSorted);
		});
	}, [eventId]);

	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	return (
		<>
			{results.length !== 0 ? (
				<div>
					<HDzhilsuResults results={results} />
					<h1 className="title__page">Результаты: {results[0]?.eventName}</h1>
					<TableResults results={results} setResults={setResults} />
					<div className="box__align-right">
						<Button getClick={goBack}>назад</Button>
					</div>
				</div>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default DzhilsuResults;
