import React, { useEffect, useState } from 'react';
import { getWebcam } from '../../api/webcam';
import HWebcam from '../Helmets/HWebcam';
import ArrowsWebcam from '../UI/ArrowWebcam/ArrowsWebcam';

import classes from './Webcam.module.css';

const Webcam = () => {
	const [webcam, setWebcam] = useState('/images/transparent800.png');
	const [numberWebcam, setNumberWebcam] = useState(1);
	useEffect(() => {
		getWebcam('/api/webcam', numberWebcam).then(data => {
			const imageCamera = URL.createObjectURL(data);
			setWebcam(imageCamera);
		});
	}, [numberWebcam]);

	return (
		<div className={classes.webcam}>
			<HWebcam />
			<h2 className={classes.title}>Вебкамеры на горе Шаджатмаз</h2>
			<div className={classes.screenShot}>
				<ArrowsWebcam numberWebcam={numberWebcam} setNumberWebcam={setNumberWebcam} />
				<a
					href={`https://gw.cmo.sai.msu.ru/webcam${numberWebcam}.jpg`}
					target="_blank"
					rel="noreferrer"
				>
					<img
						className={classes.img}
						src={webcam}
						alt={`Вебкамера на горе Шаджатмаз webcam${numberWebcam}`}
					/>
				</a>
			</div>
		</div>
	);
};

export default Webcam;
