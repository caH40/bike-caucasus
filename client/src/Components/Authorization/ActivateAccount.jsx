import React from 'react';

import classes from './Authentication.module.css';
import Modal from '../Modal/Modal';

const ActivateAccount = ({ email }) => {
	return (
		<Modal>
			<div className={classes.answer}>
				<p className={classes.bold}>Регистрация прошла успешно!</p>
				<p>
					На Вашу почту <span className={classes.bold}>{email}</span> отправлено письмо для активации
					аккаунта. Ссылка активна в течении 3 суток.
				</p>
			</div>
		</Modal>
	);
};

export default ActivateAccount;
