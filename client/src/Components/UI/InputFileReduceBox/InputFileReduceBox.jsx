import React from 'react';
import ButtonInput from '../ButtonInput/ButtonInput';

import classes from './InputFileReduceBox.module.css';

const InputFileReduceBox = ({ setForm, setPictureSource, title, multiple }) => {
	const getPicture = event => {
		if (multiple) {
			const files = event.target.files;

			for (let file of files) {
				const size = Math.trunc(file.size / 8000);

				const reader = new FileReader();
				reader.readAsDataURL(file);

				reader.onload = async () => {
					setForm(prev => ({
						...prev,
						sources: [...prev.sources, { source: reader.result, name: file.name, size }],
					}));
				};
			}

			// setForm(prev => ({
			// 	...prev,
			// 	sources: [...prev.sources, { source: reader.result, name: file.name, size }],
			// }));
		} else {
			const file = event.target.files[0];
			const size = Math.trunc(file.size / 8000);

			const reader = new FileReader();
			reader.readAsDataURL(file);

			reader.onload = async () => {
				setPictureSource({ source: reader.result, name: file.name, size });
				setForm(prev => ({ ...prev, base64Image: reader.result }));
			};
		}
	};
	return (
		<div className={classes.box__input}>
			<h2 className={classes.box__title}>{title}</h2>
			<ButtonInput getClick={getPicture} multiple={multiple}>
				Выбрать файл
			</ButtonInput>
		</div>
	);
};

export default InputFileReduceBox;
