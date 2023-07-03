import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getGalleries } from '../api/gallery';

import HGallery from '../Components/Helmets/HGallery';

import classes from './PagesCss/Gallery.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const Gallery = () => {
	const [galleries, setGalleries] = useState([]);

	useEffect(() => {
		getGalleries().then(data => {
			setGalleries(data.data.galleries);
		});
	}, []);
	return (
		<div>
			<HGallery />
			<h1 className={classes.title}>Галерея фотографий</h1>
			{galleries.length ? (
				<section className={classes.category}>
					{galleries.map(gallery => (
						<Link className={classes.card__link} to={`${gallery._id}/albums`} key={gallery._id}>
							<img className={classes.img} src={`${server}/${gallery.urlCover}`} alt="RaceDzhiliSu" />
							<h2 className={classes.description__title}>{gallery.name}</h2>
						</Link>
					))}
				</section>
			) : (
				'Loading...'
			)}
		</div>
	);
};

export default Gallery;
