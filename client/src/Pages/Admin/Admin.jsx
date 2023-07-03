import React from 'react';
import { Outlet } from 'react-router-dom';
import HAdmin from '../../Components/Helmets/HAdmin';
import NavbarAdmin from '../../Components/UI/NavbarAdmin/NavbarAdmin';

import classes from '../PagesCss/Admin.module.css';

const Admin = () => {
	return (
		<section>
			<HAdmin />
			<h1 className={classes.title}>Страница администрирования сайтом</h1>
			<div className={classes.inner}>
				<NavbarAdmin />
				<Outlet />
			</div>
		</section>
	);
};

export default Admin;
