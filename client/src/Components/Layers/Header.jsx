import React from 'react';

import classes from './Header.module.css';
import Navbar from '../UI/Navbar/Navbar';
import { Adaptive } from '../../Hoc/Adaptive';

import NavbarMobile from '../UI/NavbarMobile/NavbarMobile';
import UserAccount from '../UI/UserAccount/UserAccount';
import Login from '../UI/Login/Login';
import { useSelector } from 'react-redux';

const Header = () => {
	const isAuth = useSelector(state => state.checkAuth.value);

	return (
		<header className={classes.header}>
			<div className="container">
				<div className={classes.inner}>
					<div>
						<img className={classes.logo} src="/images/icons/logo.svg" alt="Logo" />
					</div>
					<div className={classes.navbar}>
						<Adaptive sizeScreen="lg">
							<Navbar />
							<div className={`${classes.item} ${classes.box__user}`}>
								<UserAccount isAuth={isAuth} />
							</div>
							<div className={classes.item__login}>
								<Login isAuth={isAuth} />
							</div>
						</Adaptive>
						<Adaptive sizeScreen="lg" visible={true}>
							<NavbarMobile />
						</Adaptive>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
