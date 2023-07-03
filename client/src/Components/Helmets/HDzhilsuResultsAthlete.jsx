import React from 'react';
import { Helmet } from 'react-helmet-async';

const HDzhilsuResultsAthlete = ({ results }) => {
	return (
		<Helmet>
			<link
				rel="canonical"
				href={`https://bike-caucasus.ru/dzhilsu/results/athlete/${results[0].athlete}`}
			/>
			<meta
				name="description"
				content={`Гонка-тренировка Джилы-Су. Заезды в которых принимал участие спортсмен ${results[0].athlete}`}
			/>
			<meta property="og:title" content={`Результаты ${results[0].athlete}`} />
			<meta property="og:type" content="website" />
			<meta
				property="og:url"
				content={`https://bike-caucasus.ru/dzhilsu/results/athlete/${results[0].athlete}`}
			/>
			<meta
				property="og:description"
				content={`Гонка-тренировка Джилы-Су. Заезды в которых принимал участие спортсмен ${results[0].athlete}`}
			/>
		</Helmet>
	);
};

export default HDzhilsuResultsAthlete;
