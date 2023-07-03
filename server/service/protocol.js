import { Event } from '../Model/Event.js';
import { Result } from '../Model/Result.js';

export async function postProtocolService(results, event) {
	try {
		const eventDB = await Event.create(event);
		results.forEach(result => {
			delete result._id;

			if (isNaN(+result.place)) result.place = null;
		});
		for (let result of results) {
			await Result.create({ ...result, eventId: eventDB._id }).catch(e => console.log(e));
		}

		return { message: 'Протокол сохранён!' };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. postProtocolService()';
	}
}
export async function deleteProtocolService(eventId) {
	try {
		let message = '';
		const resultsDB = await Result.deleteMany({ eventId });
		if (resultsDB.deletedCount === 0) message = `Результаты соревнования ${eventId} не найдены; `;

		const eventDB = await Event.findByIdAndDelete(eventId);
		if (!eventDB) message += `Ошибка при удалении описания соревнования ${eventId} `;

		return {
			message: message ? message : `Соревнование и результаты "${eventDB.eventName}" удалены`,
		};
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. deleteProtocolService()';
	}
}
