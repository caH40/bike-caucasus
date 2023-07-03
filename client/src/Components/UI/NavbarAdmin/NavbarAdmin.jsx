import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavbarAdmin.module.css';

const NavbarAdmin = () => {
	const liClass = ({ isActive }) => (isActive ? classes.activeLink : '');
	return (
		<nav className={classes.nav}>
			<h2 className={classes.title__list}>Новости</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="create-news" className={liClass}>
						-Создание
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="edit-news" className={liClass}>
						-Редактирование
					</NavLink>
				</li>
			</ul>
			<h2 className={classes.title__list}>Маршруты</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="create-trail" className={liClass}>
						-Создание
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="edit-trail" className={liClass}>
						-Редактирование
					</NavLink>
				</li>
			</ul>
			<h2 className={classes.title__list}>Соревнования</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="events/load" className={liClass}>
						-Загрузка результатов
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="events/edit" className={liClass}>
						-Редактирование
					</NavLink>
				</li>
			</ul>

			<h2 className={classes.title__list}>Галерея</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="gallery/create" className={liClass}>
						-Создание галереи
					</NavLink>
				</li>
				<li className={classes.item}>
					<NavLink to="gallery/edit" className={liClass}>
						-Редактирование галереи
					</NavLink>
				</li>
			</ul>
			<h2 className={classes.title__list}>Пользователи</h2>
			<ul className={classes.list}>
				<li className={classes.item}>
					<NavLink to="users" className={liClass}>
						-Управление
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarAdmin;
