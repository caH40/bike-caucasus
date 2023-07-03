import React from 'react';
import { Helmet } from 'react-helmet-async';

const HNewsFull = ({ news }) => {
	return (
		<Helmet>
			<link rel="canonical" href={`https://bike-caucasus.ru/news/${news._id}`} />
			<meta name="description" content={`Описание новости, события ${news.newsTitle}`} />
			<meta property="og:title" content={news.newsTitle} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://bike-caucasus.ru/news/${news._id}`} />
			<meta property="og:description" content={`Описание новости, события "${news.newsTitle}"`} />
		</Helmet>
	);
};

export default HNewsFull;
