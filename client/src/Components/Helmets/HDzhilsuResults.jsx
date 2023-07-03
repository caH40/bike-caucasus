import React from 'react';
import { Helmet } from 'react-helmet-async';

const HDzhilsuResults = ({ results }) => {
	return (
		<Helmet>
			<link
				rel="canonical"
				href={`https://bike-caucasus.ru/dzhilsu/results/${results[0].eventId}`}
			/>
			<meta name="description" content={`Результаты ${results[0].eventName}`} />
			<meta property="og:title" content={`${results[0].eventName}`} />
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content={`https://bike-caucasus.ru/dzhilsu/results/${results[0].eventId}`}
			/>
			<meta
				property="og:description"
				content={`Результаты ${results[0].eventName}. Гонка-тренировка проходит в Карачаево-Черкесской и Кабардино-Балкарской республиках.`}
			/>
		</Helmet>
	);
};

export default HDzhilsuResults;
