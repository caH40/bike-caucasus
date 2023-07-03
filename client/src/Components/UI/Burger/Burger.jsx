import React from 'react';

import classes from './Burger.module.css';

const Burger = ({ updateMenu, isBurgerClicked }) => {
	const burgerClass = isBurgerClicked
		? `${classes.bar} ${classes.clicked}`
		: `${classes.bar} ${classes.unClicked}`;
	return (
		<>
			<div className={classes.burger} onClick={updateMenu}>
				<div className={burgerClass}></div>
				<div className={burgerClass}></div>
				<div className={burgerClass}></div>
			</div>
		</>
	);
};

export default Burger;
