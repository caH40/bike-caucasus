import React from 'react';
import { reduceImage } from '../../../utils/reduce-image';
import ButtonInput from '../ButtonInput/ButtonInput';
import Checkmark from '../Checkmark/Checkmark';

import classes from './InputFileURLBox.module.css';

const InputFileURLBox = ({ form, setForm, title, keyObject, boxClass }) => {
	const getPicture = event => {
		const file = event.target.files[0];
		if (!file) return;
		// const size = Math.trunc(file.size / 8000);

		const reader = new FileReader();
		reader.readAsDataURL(file);

		reader.onload = async () => {
			const reducedImage = await reduceImage(reader.result, false, 250);
			setForm(prev => ({
				...prev,
				[keyObject]: {
					source: reducedImage,
					name: file.name,
					size: Math.trunc((reducedImage.length * 0.75) / 800) + 'kB',
				},
			}));
		};
	};

	return (
		<div className={[classes.box__input, classes[boxClass]].join(' ')}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<div>
					<ButtonInput getClick={getPicture}>Выбрать файл</ButtonInput>
				</div>
				<Checkmark isCompleted={form[keyObject]?.source} />
			</div>
		</div>
	);
};

export default InputFileURLBox;
