import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { confirmEmail } from '../api/confirm-email';

const ConfirmEmail = () => {
	const [message, setMessage] = useState('');
	const { token } = useParams();

	useEffect(() => {
		confirmEmail(token).then(response => {
			setMessage(response.data.message);
		});
	}, [token]);
	return (
		<section className="page404">
			<h1 className="page404__title">Страница активации аккаунта</h1>
			<p className="page404__text">{message}</p>
		</section>
	);
};

export default ConfirmEmail;
