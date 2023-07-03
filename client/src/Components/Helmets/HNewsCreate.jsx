import React from 'react';
import { Helmet } from 'react-helmet-async';

const HNewsCreate = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/create-news" />
			<meta name="robots" content="noindex, nofollow, noarchive" />
			<meta
				name="description"
				content="Форма создания новости, анонсов мероприятий, соревнований и совместных заездов."
			/>
			<meta property="og:title" content="Форма создания новости" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/create-news" />
			<meta
				property="og:description"
				content="Форма создания новости, анонсов мероприятий, соревнований и совместных заездов."
			/>
		</Helmet>
	);
};

export default HNewsCreate;
