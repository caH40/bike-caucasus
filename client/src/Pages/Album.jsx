import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPhotos } from '../api/gallery';
import Button from '../Components/UI/Button/Button';
import { useFancy } from '../hooks/use-fancy';

import classes from './PagesCss/Album.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const Album = () => {
	const [photos, setPhotos] = useState([]);
	const navigate = useNavigate();

	const { albumId } = useParams();

	useEffect(() => {
		getPhotos(albumId).then(data => setPhotos(data.data.photos));
	}, [albumId]);

	const getBack = () => navigate(-1);
	useFancy();
	const nameAlbum = photos[0] ? photos[0]?.albumId.name : '';
	return (
		<div className={classes.wrapper}>
			<h1 className={classes.title}>{`Фотографии из альбома "${nameAlbum}"`} </h1>
			{photos.length ? (
				<div className={classes.inner}>
					{photos.map(photo => (
						<a
							className={classes.preview}
							data-fancybox="gallery"
							href={`${server}/${photo.urlPhotoNormal}`}
							key={photo._id}
						>
							<img
								className={`rounded ${classes.img}`}
								src={`${server}/${photo.urlPhotoSmall}`}
								alt="loading..."
							/>
						</a>
					))}
				</div>
			) : (
				'Loading'
			)}
			<Button getClick={getBack}>Назад</Button>
		</div>
	);
};

export default Album;
