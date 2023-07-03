import React from 'react';
import { Helmet } from 'react-helmet-async';

const HWebcam = () => {
	return (
		<Helmet>
			<link rel="canonical" href="https://bike-caucasus.ru/webcam" />
			<meta
				name="description"
				content="Вебкамеры на горе Шаджатмаз. Вид на Эльбрус, КМВ, Учкекен, Канжол."
			/>
			<meta property="og:title" content="Вебкамеры на горе Шаджатмаз" />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://bike-caucasus.ru/webcam" />
			<meta
				property="og:description"
				content="Вебкамеры на горе Шаджатмаз. Вид на Эльбрус, КМВ, Учкекен, Канжол"
			/>
		</Helmet>
	);
};

export default HWebcam;
