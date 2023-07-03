import React from 'react';
import TableEventsModerate from '../../Components/Table/EventsModerate/TableEventsModerate';

import classes from '../PagesCss/EventsEdit.module.css';

const EventsEdit = () => {
	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Соревнования для редактирования</h2>
			<TableEventsModerate />
		</section>
	);
};

export default EventsEdit;
