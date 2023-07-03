import React from 'react';
import { Helmet } from 'react-helmet-async';

const HTrail = ({ trail }) => {
	return (
		<Helmet>
			<link rel="canonical" href={`https://bike-caucasus.ru/trails/${trail._id}`} />
			<meta
				name="description"
				content={`Велосипедный маршрут "${trail.nameRoute}" (${trail.state}), тип велосипеда - ${trail.bikeType}`}
			/>
			<meta property="og:title" content={`Описание маршрута "${trail.nameRoute}"`} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={`https://bike-caucasus.ru/trails/${trail._id}`} />
			<meta
				property="og:description"
				content={`Велосипедный маршрут "${trail.nameRoute}" (${trail.state}), тип велосипеда - ${trail.bikeType}`}
			/>
		</Helmet>
	);
};

export default HTrail;
