import React from 'react';
import CheckboxTrails from './Checkbox/CheckboxTrails';
import classes from './SortFilterTrails.module.css';
import SelectTrails from './Select/SelectTrails';

const SortFilterTrails = ({ sort, getSorting, getFilter, filter, isVisible, getVisible }) => {
	return (
		<nav className={classes.menu}>
			<SelectTrails sort={sort} getSorting={getSorting} />
			<CheckboxTrails
				getFilter={getFilter}
				filter={filter}
				isVisible={isVisible}
				getVisible={getVisible}
			/>
		</nav>
	);
};

export default SortFilterTrails;
