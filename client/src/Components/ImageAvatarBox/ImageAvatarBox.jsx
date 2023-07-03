import React from 'react';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './ImageAvatarBox.module.css';

const ImageAvatarBox = ({ form, setForm, keyObject }) => {
	const closeImage = () => {
		setForm(prev => ({ ...prev, [keyObject]: {} }));
	};

	return (
		<div className={classes.block__picture}>
			{form[keyObject]?.source ? (
				<div className={classes.box__img}>
					<img className={classes.img} src={form[keyObject].source} alt="news" />
					<div className={classes.cross__info}>
						<ButtonClose getClick={closeImage} />
					</div>
				</div>
			) : undefined}
		</div>
	);
};

export default ImageAvatarBox;
