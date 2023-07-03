import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Burger from '../Burger/Burger';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import UserAccount from '../UserAccount/UserAccount';
import classes from './NavbarMobile.module.css';

const NavbarMobile = () => {
	const [isBurgerClicked, setIsBurgerClicked] = useState(false);
	const isAuth = useSelector(state => state.checkAuth.value);

	if (isBurgerClicked) {
		document.body.setAttribute('class', 'fixed');
	} else {
		document.body.removeAttribute('class', 'fixed');
	}

	const menuClass = isBurgerClicked
		? `${classes.menu} ${classes.visible}`
		: `${classes.menu} ${classes.hidden}`;

	const updateMenu = () => {
		setIsBurgerClicked(prev => !prev);
	};

	return (
		<nav>
			<Burger isBurgerClicked={isBurgerClicked} updateMenu={updateMenu} />
			<div className={menuClass}>
				<Navbar isMobile={true} updateMenu={updateMenu} />
				<div className={classes.auth}>
					<div className={classes.box__user}>
						<UserAccount isAuth={isAuth} updateMenu={updateMenu} />
					</div>
					<div className={classes.box__login}>
						<Login isAuth={isAuth} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarMobile;
