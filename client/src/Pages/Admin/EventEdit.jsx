import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { getEvent, postEvent } from '../../api/events';
import Button from '../../Components/UI/Button/Button';
import ButtonSendBox from '../../Components/UI/ButtonSendBox/ButtonSendBox';
import InputBox from '../../Components/UI/InputBox/InputBox';
import { getAlert } from '../../redux/features/alertMessageSlice';

import classes from '../PagesCss/EventEdit.module.css';

const EventEdit = () => {
	const [eventForm, setEventForm] = useState({});

	const { eventId } = useParams();

	useEffect(() => {
		getEvent(eventId).then(data => setEventForm(data.data.event));
	}, [eventId]);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const sendForm = e => {
		e.preventDefault();
		postEvent(eventId, eventForm)
			.then(data => {
				dispatch(
					getAlert({
						message: data.data.message,
						type: 'success',
						isOpened: true,
					})
				);
				navigate('/admin/events/edit');
				return;
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
			<h2 className={classes.title}>Редактирование описания соревнования</h2>
			<form className={classes.form}>
				<div className={classes.block}>
					<InputBox
						title="Название соревнования"
						form={eventForm}
						setForm={setEventForm}
						keyObject="eventName"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Дата проведения"
						form={eventForm}
						setForm={setEventForm}
						keyObject="eventDate"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Город"
						form={eventForm}
						setForm={setEventForm}
						keyObject="eventCity"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Тип заезда"
						form={eventForm}
						setForm={setEventForm}
						keyObject="type"
						type="text"
						boxClass="mr-10"
					/>
					<InputBox
						title="Дистанция, км"
						form={eventForm}
						setForm={setEventForm}
						keyObject="distance"
						type="number"
						boxClass="mr-10"
					/>
					<InputBox
						title="Ссылка на сегмент в Страве (полная)"
						form={eventForm}
						setForm={setEventForm}
						keyObject="segmentStrava"
						type="text"
						boxClass="mr-10"
					/>
					<div className={classes.box__button}>
						<ButtonSendBox title="Сохранение введенных данных" sendForm={sendForm} boxClass="mr-10" />
					</div>
				</div>
			</form>
			<Button getClick={() => navigate(-1)} additionalClasses="warning">
				Назад
			</Button>
		</section>
	);
};

export default EventEdit;
