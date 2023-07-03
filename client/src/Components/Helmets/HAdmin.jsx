import React from 'react';
import { Helmet } from 'react-helmet-async';

const HAdmin = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/admin" />
			<meta name="robots" content="noindex, nofollow, noarchive" />
			<meta name="description" content="Админ страница управления сайтом" />
			<meta property="og:title" content="Админ страница управления сайтом" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/admin" />
			<meta property="og:description" content="Админ страница управления сайтом" />
		</Helmet>
	);
};

export default HAdmin;
