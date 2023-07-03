import React from 'react';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './ImagesURLBox.module.css';

const ImagesURLBox = ({ form, setForm, boxStyle, keyObject }) => {
	const closeImage = name => {
		setForm(prev => ({
			...prev,
			[keyObject]: prev[keyObject].filter(photo => photo.name !== name),
		}));
	};

	return (
		<div className={classes.block__picture}>
			{form[keyObject]?.length
				? form[keyObject].map((photo, index) => {
						return (
							<div className={classes.box__img} style={boxStyle} key={index + photo.name}>
								<img className={classes.img} src={photo.source} alt="news" />
								<div className={classes.img__info}>
									<span>{photo.name}</span>
									<span>{photo.size}kB</span>
								</div>
								<div className={classes.cross__info}>
									<ButtonClose getClick={() => closeImage(photo.name)} />
								</div>
							</div>
						);
				  })
				: undefined}
		</div>
	);
};

export default ImagesURLBox;
