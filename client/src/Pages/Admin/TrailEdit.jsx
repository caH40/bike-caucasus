import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrail } from '../../api/trail';
import HTrailEdit from '../../Components/Helmets/HTrailEdit';
import FormTrailEdit from '../../Components/UI/FormTrailEdit/FormTrailEdit';

import classes from '../PagesCss/TrailEdit.module.css';

const TrailEdit = () => {
	const [trail, setTrail] = useState([]);

	const { trailId } = useParams({});

	useEffect(() => {
		getTrail(trailId, 'edit').then(data => {
			setTrail(data);
		});
	}, [trailId]);

	return (
		<section className={classes.wrapper}>
			{' '}
			{trail?._id ? (
				<>
					<HTrailEdit />
					<h2 className={classes.title}>Редактирование маршрута</h2>
					<FormTrailEdit trail={trail} type="edit" />
				</>
			) : (
				'Loading...'
			)}
		</section>
	);
};

export default TrailEdit;
