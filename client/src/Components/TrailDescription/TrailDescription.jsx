import React from 'react';

import classes from './TrailDescription.module.css';

const TrailDescription = ({ trail }) => {
	return (
		<div className={classes.block__description}>
			{trail.descriptionArea.map((paragraph, index) => {
				if (paragraph === '') return '';
				return (
					<div className={classes.box__description} key={trail.descPhotos + index}>
						<p className={classes.text}>{paragraph}</p>
						<img
							src={trail.descPhoto[index]}
							alt={`${trail.nameRoute}-${index + 1}`}
							className={classes.img}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default TrailDescription;
