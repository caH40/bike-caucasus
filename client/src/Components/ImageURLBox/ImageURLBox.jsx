import React from 'react';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

import classes from './ImageURLBox.module.css';

const ImageURLBox = ({ form, setForm, keyObject }) => {
	const closeImage = () => {
		setForm(prev => ({ ...prev, [keyObject]: {} }));
	};

	return (
		<div className={classes.block__picture}>
			{form[keyObject]?.source ? (
				<div className={classes.box__img}>
					<img className={classes.img} src={form[keyObject].source} alt="news" />
					<div className={classes.img__info}>
						<span>{form[keyObject].name}</span>
						<span>{form[keyObject].size}kB</span>
					</div>
					<div className={classes.cross__info}>
						<ButtonClose getClick={closeImage} />
					</div>
				</div>
			) : undefined}
		</div>
	);
};

export default ImageURLBox;
