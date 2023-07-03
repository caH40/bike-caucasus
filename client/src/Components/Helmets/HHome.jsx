import React from 'react';
import { Helmet } from 'react-helmet-async';

const HHome = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/" />
			<meta name="description" content="Лента новостей, событий и анонсов мероприятий" />
			<meta property="og:title" content="Главная страница сайта Bike-Caucasus" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/" />
			<meta property="og:description" content="Лента новостей, событий и анонсов мероприятий" />
		</Helmet>
	);
};

export default HHome;
