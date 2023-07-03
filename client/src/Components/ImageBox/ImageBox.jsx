import React from 'react';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './ImageBox.module.css';
const server = process.env.REACT_APP_SERVER_EXPRESS;

const ImageBox = ({ pictureUrl, pictureSource, setPictureSource }) => {
	const closeImage = () => {
		setPictureSource({});
		pictureUrl.current = '';
	};

	const picture = pictureUrl?.current ? `${server}/${pictureUrl.current}` : pictureSource.source;

	return (
		<div className={classes.block__picture}>
			{picture ? (
				<div className={classes.box__img}>
					<img className={classes.img} src={picture} alt="news" />
					<div className={classes.img__info}>
						<span>{pictureSource.name}</span>
						<span>{pictureSource.size}kB</span>
					</div>
					<div className={classes.cross__info}>
						<ButtonClose getClick={closeImage} />
					</div>
				</div>
			) : undefined}
		</div>
	);
};

export default ImageBox;
