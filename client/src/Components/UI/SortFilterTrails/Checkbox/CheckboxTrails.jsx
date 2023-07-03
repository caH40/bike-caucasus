import React from 'react';

import classes from '../SortFilterTrails.module.css';

const CheckboxTrails = ({ getFilter, filter, isVisible, getVisible }) => {
	const flashlight = filter.length === 7 ? classes.flashlight__off : classes.flashlight__on;
	return (
		<div id="trails__checkbox" className={classes.item} onClick={getVisible}>
			<div className={[classes.btn, flashlight].join(' ')}>Фильтр</div>
			<form className={classes.form__checkbox} style={{ display: isVisible ? 'block' : 'none' }}>
				<p className={classes.form__string}>
					<input
						type="checkbox"
						value="КавМинВоды"
						checked={filter.includes('КавМинВоды')}
						onChange={e => getFilter(e.target.checked, 'КавМинВоды')}
					/>
					<span>КавМинВоды</span>
				</p>
				<p className={classes.form__string}>
					<input
						type="checkbox"
						value="Карачаево-Черкессия"
						checked={filter.includes('Карачаево-Черкессия')}
						onChange={e => getFilter(e.target.checked, 'Карачаево-Черкессия')}
					/>
					Карачаево-Черкессия
				</p>
				<p className={classes.form__string}>
					<input
						type="checkbox"
						value="Кабардино-Балкария"
						checked={filter.includes('Кабардино-Балкария')}
						onChange={e => getFilter(e.target.checked, 'Кабардино-Балкария')}
					/>
					Кабардино-Балкария
				</p>
				<p className={classes.form__string}>
					<input
						type="checkbox"
						value="Северная Осетия"
						checked={filter.includes('Северная Осетия')}
						onChange={e => getFilter(e.target.checked, 'Северная Осетия')}
					/>
					Северная Осетия
				</p>
				<p className={classes.form__string}>
					<input
						type="checkbox"
						value="Адыгея"
						checked={filter.includes('Адыгея')}
						onChange={e => getFilter(e.target.checked, 'Адыгея')}
					/>
					Адыгея
				</p>
				<p className={classes.form__string}>
					<input
						type="checkbox"
						value="Шоссейный"
						checked={filter.includes('Шоссейный')}
						onChange={e => getFilter(e.target.checked, 'Шоссейный')}
					/>
					Шоссейный велосипед
				</p>
				<p className={classes.form__string}>
					<input
						type="checkbox"
						value="Горный"
						checked={filter.includes('Горный')}
						onChange={e => getFilter(e.target.checked, 'Горный')}
					/>
					Горный велосипед
				</p>
			</form>
		</div>
	);
};

export default CheckboxTrails;
