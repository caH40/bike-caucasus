import React from 'react';
import { Link, useParams } from 'react-router-dom';

const urlServer = process.env.REACT_APP_SERVER_FRONT;

const Page404 = () => {
	const { '*': wrongUrl } = useParams();

	return (
		<section className="page404">
			<h1 className="page404__title">Ошибка 404</h1>
			<p className="page404__text">
				Мы не смогли найти страницу{' '}
				<span className="page404__text-wrong">{`${urlServer}/${wrongUrl}`}</span>
			</p>
			<p className="page404__text">Не расстраивайтесь, у нас много других интересных страниц!</p>
			<Link to="/" className="page404__text-link">
				на главную страницу
			</Link>
		</section>
	);
};

export default Page404;
