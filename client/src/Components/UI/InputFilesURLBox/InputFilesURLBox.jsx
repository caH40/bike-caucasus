import React from 'react';
import { reduceImage } from '../../../utils/reduce-image';
import ButtonInput from '../ButtonInput/ButtonInput';
import Checkmark from '../Checkmark/Checkmark';

import classes from './InputFilesURLBox.module.css';

const InputFilesURLBox = ({ form, setForm, title, boxStyle }) => {
	const getPictures = event => {
		const files = event.target.files;
		if (!files.length) return;

		for (let i = 0; i < files.length; i++) {
			let size = Math.trunc(files[i].size / 8000);

			let reader = new FileReader();
			reader.readAsDataURL(files[i]);
			reader.onload = async () => {
				const reducedImage = await reduceImage(reader.result, 10 / 16, 800);
				setForm(prev => ({
					...prev,
					descPhotos: [...prev.descPhotos, { source: reducedImage, name: files[i].name, size }],
				}));
			};
		}
	};

	return (
		<div className={classes.box__input} style={boxStyle}>
			<h2 className={classes.box__title}>{title}</h2>
			<div className={classes.box__interactive}>
				<div>
					<ButtonInput getClick={getPictures} multiple={true}>
						Выбрать файлы
					</ButtonInput>
				</div>
				<Checkmark isCompleted={form.descPhotos.length} />
			</div>
		</div>
	);
};

export default InputFilesURLBox;
