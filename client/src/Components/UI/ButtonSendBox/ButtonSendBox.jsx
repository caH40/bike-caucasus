import React from 'react';
import Button from '../Button/Button';

import classes from './ButtonSendBox.module.css';
const ButtonSendBox = ({ sendForm, title, boxClass }) => {
	return (
		<div className={[classes.box__input, classes[boxClass]].join(' ')}>
			<h2 className={classes.box__title}>{title}</h2>
			<Button getClick={sendForm} type="submit">
				Отправить
			</Button>
		</div>
	);
};

export default ButtonSendBox;
