import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTrail } from '../api/trail';
import HTrail from '../Components/Helmets/HTrail';
import TrailDescription from '../Components/TrailDescription/TrailDescription';
import TrailTotal from '../Components/TrailTotal/TrailTotal';
import TrailVideo from '../Components/TrailVideo/TrailVideo';
import classes from './PagesCss/Trail.module.css';

const Trail = () => {
	const [trail, setTrail] = useState({});
	const { trailId } = useParams();

	useEffect(() => {
		getTrail(trailId).then(data => {
			setTrail(data);
		});
	}, [trailId]);
	return (
		<>
			{trail?.nameRoute ? (
				<section>
					<HTrail trail={trail} />
					<h1 className={classes.title}>
						{trail?.nameRoute} ({trail?.state})
					</h1>
					<div className={classes.inner}>
						<TrailDescription trail={trail} />
						{trail.urlVideo ? <TrailVideo url={trail.urlVideo} /> : ''}
						<TrailTotal trail={trail} />
					</div>
				</section>
			) : (
				'Loading...'
			)}
		</>
	);
};

export default Trail;
