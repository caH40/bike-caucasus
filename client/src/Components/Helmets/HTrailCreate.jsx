import React from 'react';
import { Helmet } from 'react-helmet-async';

const HTrailCreate = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/create-trail" />
			<meta name="robots" content="noindex, nofollow, noarchive" />
			<meta
				name="description"
				content="Форма создания маршрута для шоссейного и горного велосипедов"
			/>
			<meta property="og:title" content="Форма создания велосипедного маршрута" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/create-trail" />
			<meta
				property="og:description"
				content="Форма создания маршрута для шоссейного и горного велосипедов"
			/>
		</Helmet>
	);
};

export default HTrailCreate;
