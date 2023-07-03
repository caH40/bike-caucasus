import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { getTrails } from '../../api/trail';
import Card from '../../Components/Card/Card';
import HTrails from '../../Components/Helmets/HTrails';
import Pagination from '../../Components/UI/Pagination/Pagination';
import SortFilterTrails from '../../Components/UI/SortFilterTrails/SortFilterTrails';
import { filterStart, sortStart } from './service';
import classes from '../PagesCss/Trails.module.css';

const cardsOnPage = 10;

const Trails = () => {
	const [trails, setTrails] = useState([]);
	const [filter, setFilter] = useState(filterStart());
	const [sort, setSort] = useState(sortStart());
	const [isVisible, setIsVisible] = useState(false);
	const [quantityPages, setQuantityPages] = useState(1);
	const [page, setPage] = useState(1);

	const getSorting = e => {
		const sortFromSelect = JSON.parse(e.target.value);

		localStorage.setItem('sortField', sortFromSelect.sortField);
		localStorage.setItem('sortDirection', sortFromSelect.sortDirection);

		setSort(sortFromSelect);
	};

	const getFilter = (isChecked, field) => {
		if (isChecked) {
			setFilter(prev => {
				const newState = [...prev, field];
				localStorage.setItem('filterFields', newState);
				return newState;
			});
		} else {
			setPage(1);
			setFilter(prev => {
				const newState = prev.filter(element => element !== field);
				localStorage.setItem('filterFields', newState);
				return newState;
			});
		}
	};

	const getVisible = () => {
		setIsVisible(true);
		document
			.querySelector('#trails__checkbox')
			.addEventListener('mouseleave', () => setIsVisible(false), { once: true });
	};

	useEffect(() => {
		getTrails(filter, sort, cardsOnPage, page).then(data => {
			setQuantityPages(data.quantityPages);
			setTrails(data.cards);
		});
	}, [filter, sort, page]);

	return (
		<section>
			<HTrails />
			<h1 className={classes.title}>Велосипедные маршруты</h1>
			<SortFilterTrails
				sort={sort}
				getSorting={getSorting}
				getFilter={getFilter}
				filter={filter}
				isVisible={isVisible}
				getVisible={getVisible}
			/>

			{trails.length ? (
				<>
					<div className={classes.inner}>
						{trails.map(trail => (
							<Card trail={trail} key={trail._id} />
						))}
					</div>
					<Pagination quantityPages={quantityPages} page={page} setPage={setPage} />
				</>
			) : (
				'Loading...'
			)}
		</section>
	);
};

export default Trails;
