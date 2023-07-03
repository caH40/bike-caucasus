import React from 'react';
import { Helmet } from 'react-helmet-async';

const HTrails = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/trails" />
			<meta
				name="description"
				content="Велосипедные маршруты по Кавказу для шоссейный и МТБ велосипедов"
			/>
			<link rel="canonical" href="https://bike-caucasus.ru/trails" />
			<meta property="og:title" content="Велосипедные маршруты по Кавказу" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/trails" />
			<meta
				property="og:description"
				content="Страница выбора велосипедных маршрутов по Кавказу для шоссейный и МТБ велосипедов"
			/>
		</Helmet>
	);
};

export default HTrails;
