import React from 'react';

import classes from './Pagination.module.css';

const Pagination = ({ quantityPages, page, setPage }) => {
	const pages = Array(quantityPages).fill('');
	const getClick = item => {
		if (item === '<<' && page !== 1) return setPage(prev => prev - 1);
		if (item === '>>' && page !== quantityPages && quantityPages !== 1)
			return setPage(prev => prev + 1);
		if (item === '>>' && quantityPages === page) return;
		if (item === '<<' && page === 1) return;
		setPage(item);
	};

	return (
		<nav className={classes.navigation}>
			<ul className={classes.list}>
				<li className={classes.item} onClick={() => getClick('<<')}>
					{'<<'}
				</li>
				{pages.map((_, index) => (
					<li
						className={page === index + 1 ? `${classes.item} ${classes.active}` : classes.item}
						onClick={() => getClick(index + 1)}
						key={index + 1}
					>
						{index + 1}
					</li>
				))}
				<li className={classes.item} onClick={() => getClick('>>')}>
					{'>>'}
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
