import { v4 as uuidv4 } from 'uuid';

export function changeTitlesEvent(data) {
	return {
		eventDate: data[0]?.['Дата'],
		eventName: data[0]?.['Название'],
		distance: data[0]?.['Дистанция'],
		type: data[0]?.['Тип заезда'],
		eventCity: data[0]?.['Место старта'],
		segmentStrava: data[0]?.['Сегмент в Страве'],
	};
}
export function changeTitlesResults(data) {
	const results = [];
	data.forEach(result => {
		const interim = {};
		interim._id = uuidv4();
		interim.place = result?.['Место'];
		interim.number = result?.['Номер'];
		interim.athlete = result?.['ФИО'];
		interim.athleteCity = result?.['Город'];
		interim.athleteTeam = result?.['Команда'];
		interim.timeTotal = result?.['Время'];
		interim.distance = result?.['Дистанция'];
		interim.мужской = result?.['Пол'];
		interim.birthday = result?.['Год рождения'];
		results.push(interim);
	});
	return results;
}
