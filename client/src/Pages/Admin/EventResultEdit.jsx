import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getResult, postResult } from '../../api/results';
import Button from '../../Components/UI/Button/Button';
import ButtonSendBox from '../../Components/UI/ButtonSendBox/ButtonSendBox';
import InputBox from '../../Components/UI/InputBox/InputBox';
import SelectBox from '../../Components/UI/SelectBox/SelectBox';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/EventResultEdit.module.css';

const EventResultEdit = () => {
	const [resultForm, setResultForm] = useState({});

	const { resultId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		getResult(resultId)
			.then(data => setResultForm(data.data.result))
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при запросе результата!',
						type: 'error',
						isOpened: true,
					})
				);
			});
	}, [resultId, dispatch]);

	const sendForm = e => {
		e.preventDefault();
		postResult(resultForm)
			.then(data => {
				if (data?.status === 200) {
					dispatch(
						getAlert({
							message: data.data.message,
							type: 'success',
							isOpened: true,
						})
					);
					navigate(-1);
					return;
				}
			})
			.catch(error => {
				dispatch(
					getAlert({
						message: 'Ошибка при сохранении изменений!',
						type: 'error',
						isOpened: true,
					})
				);
			});
	};

	return (
		<section className={classes.wrapper}>
			<h2 className={classes.title}>Редактирование результата спортсмена</h2>
			<form className={classes.form}>
				<div className={classes.block}>
					<InputBox
						title="Id пользователя в БД"
						form={resultForm}
						setForm={setResultForm}
						keyObject="userId"
						type="text"
						boxClass="mr-10"
						disabled={true}
					/>
					<InputBox
						title="ФИО (через пробел 'Ф И О')"
						form={resultForm}
						setForm={setResultForm}
						keyObject="athlete"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Место в финишном протоколе"
						form={resultForm}
						setForm={setResultForm}
						keyObject="place"
						type="number"
						boxClass="mr-10"
					/>
					<InputBox
						title="Номер спортсмена"
						form={resultForm}
						setForm={setResultForm}
						keyObject="number"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Город спортсмена"
						form={resultForm}
						setForm={setResultForm}
						keyObject="athleteCity"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Команда"
						form={resultForm}
						setForm={setResultForm}
						keyObject="athleteTeam"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Дистанция заезда"
						form={resultForm}
						setForm={setResultForm}
						keyObject="distance"
						type="number"
						boxClass="mr-10"
					/>
					<InputBox
						title="Общее время (чч:мм:сс)"
						form={resultForm}
						setForm={setResultForm}
						keyObject="timeTotal"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Год рождения"
						form={resultForm}
						setForm={setResultForm}
						keyObject="birthday"
						type="number"
						boxClass="mr-10"
					/>
					<SelectBox
						title="Пол"
						form={resultForm}
						setForm={setResultForm}
						keyObject="gender"
						values={[
							{ id: 1, name: 'мужской' },
							{ id: 2, name: 'женский' },
						]}
						type="text"
						boxClass="mr-10"
					/>
				</div>
				<div className={classes.box__button}>
					<ButtonSendBox title="Сохранение введенных данных" sendForm={sendForm} boxClass="mr-10" />
				</div>
			</form>
			<Button getClick={() => navigate(-1)} additionalClasses="warning">
				Назад
			</Button>
		</section>
	);
};

export default EventResultEdit;
