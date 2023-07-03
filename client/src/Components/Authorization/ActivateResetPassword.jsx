import React from 'react';

import classes from './Authentication.module.css';
import Modal from '../Modal/Modal';

const ActivateResetPassword = ({ email }) => {
	return (
		<Modal>
			<div className={classes.answer}>
				<p className={classes.bold}>Сброс пароля!</p>
				<p>
					На Вашу почту <span className={classes.bold}>{email}</span> отправлено письмо с инструкцией
					по сбросу пароля. Ссылка активна в течении 3 суток.
				</p>
			</div>
		</Modal>
	);
};

export default ActivateResetPassword;
