import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { postLikeNews } from '../api/likes';
import HHome from '../Components/Helmets/HHome';
import News from '../Components/NewsCard/NewsCard';
import Webcam from '../Components/Webcam/Webcam';
import { Adaptive } from '../Hoc/Adaptive';

import classes from './PagesCss/Home.module.css';

const Home = () => {
	const likes = useSelector(state => state.likesNews.value);

	useEffect(() => {
		if (!likes.action) return;
		postLikeNews(likes);
	}, [likes]);

	return (
		<section className={classes.wrapper}>
			<HHome />
			<h1 className={classes.title}>Новости, события и анонсы мероприятий</h1>
			<div className={classes.inner}>
				<News />
				<Adaptive sizeScreen="lg" visible={false}>
					<Webcam />
				</Adaptive>
			</div>
		</section>
	);
};

export default Home;
