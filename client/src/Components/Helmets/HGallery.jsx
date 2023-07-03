import React from 'react';
import { Helmet } from 'react-helmet-async';

const HGallery = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/gallery" />
			<meta
				name="description"
				content="Галерея фотографий гор и природы Кавказа. Фотографии с шоссейных и МТБ заездов."
			/>
			<meta property="og:title" content="Фотографии с велозаездов по Кавказу" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/gallery" />
			<meta property="og:description" content="Галерея фотографий с заездов по Кавказу" />
		</Helmet>
	);
};

export default HGallery;
