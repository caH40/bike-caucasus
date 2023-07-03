import React from 'react';
import { Helmet } from 'react-helmet-async';

const HNewsAll = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/edit-news" />
			<meta name="robots" content="noindex, nofollow, noarchive" />
			<meta name="description" content="Таблица всех новостей для редактирования." />
			<meta property="og:title" content="Таблица всех новостей." />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/edit-news" />
			<meta property="og:description" content="Таблица всех новостей для редактирования." />
		</Helmet>
	);
};

export default HNewsAll;
