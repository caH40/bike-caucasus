import React from 'react';
import HTrailCreate from '../../Components/Helmets/HTrailCreate';
import FormTrailEdit from '../../Components/UI/FormTrailEdit/FormTrailEdit';

import classes from '../PagesCss/TrailCreate.module.css';

const TrailCreate = () => {
	return (
		<section className={classes.wrapper}>
			<HTrailCreate />
			<h2 className={classes.title}>Создание велосипедного маршрута</h2>
			<FormTrailEdit type="create" />
		</section>
	);
};

export default TrailCreate;
