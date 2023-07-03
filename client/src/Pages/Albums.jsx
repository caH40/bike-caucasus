import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAlums } from '../api/gallery';
import Button from '../Components/UI/Button/Button';

import classes from './PagesCss/Albums.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const Albums = () => {
	const [albums, setAlbums] = useState([]);
	const { galleryId } = useParams();

	const navigate = useNavigate();
	const getBack = () => navigate(-1);

	useEffect(() => {
		getAlums(galleryId).then(data => setAlbums(data?.data?.albums));
	}, [galleryId]);

	const nameGallery = albums[0] ? albums[0]?.galleryId.name : '';
	return (
		<div>
			<h1 className={classes.title}>{`Альбомы "${nameGallery}"`}</h1>
			{albums?.length ? (
				<section className={classes.albums}>
					{albums.map(album => (
						<Link className={classes.card__link} to={album._id} key={album._id}>
							<img className={classes.img} src={`${server}/${album.urlCover}`} alt="layout" />
							<h2 className={classes.description__title}>{album.name}</h2>
							<div className={classes.description}>{album.description}</div>
						</Link>
					))}
				</section>
			) : (
				'Loading...'
			)}
			<Button getClick={getBack}>Назад</Button>
		</div>
	);
};

export default Albums;
