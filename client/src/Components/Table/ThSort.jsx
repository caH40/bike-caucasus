import React from 'react';

import { mySort } from '../../utils/mysort';

import classes from './Table.module.css';

const ThSort = ({ sort, setSort, data, setData, field, children }) => {
	const changeSort = () => {
		//разобраться с последовательным изменением состояния
		setSort(prev => ({
			sortDirection: prev.sortDirection === 'down' ? 'up' : 'down',
			sortField: field,
		}));

		setData(mySort(data, field, sort.sortDirection === 'down' ? 'up' : 'down'));
	};

	return (
		<th scope="col" onClick={changeSort}>
			<div className={classes.th__flex}>
				<div className={classes.th__title}>{children}</div>
				<svg
					width="14"
					height="15"
					viewBox="0 0 14 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M6.81818 0L12.7229 6.64773L0.913463 6.64773L6.81818 0Z"
						fill={sort.sortField === field && sort.sortDirection === 'down' ? '#FF8C06' : '#CBCBCB'}
					/>
					<path
						d="M6.81817 15L0.913451 8.35227L12.7229 8.35227L6.81817 15Z"
						fill={sort.sortField === field && sort.sortDirection === 'up' ? '#FF8C06' : '#CBCBCB'}
					/>
				</svg>
			</div>
		</th>
	);
};

export default ThSort;
