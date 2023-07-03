import { Event } from '../Model/Event.js';
import { Result } from '../Model/Result.js';

export async function getEventsService() {
	try {
		const eventsDB = await Event.find();
		const resultsDB = await Result.find();
		const events = eventsDB.map(event => {
			event = event.toObject();

			const quantityRiders = resultsDB.filter(
				result => result.eventId.toString() === event._id.toString()
			).length;
			event.quantityRiders = quantityRiders;
			return event;
		});
		return { message: 'Список соревнований', data: events };
	} catch (error) {
		throw 'Непредвиденная ошибка на сервере. getEventsService()';
	}
}

export async function getEventService(eventId) {
	try {
		const eventDB = await Event.findOne({ _id: eventId });
		return { message: 'Описание соревнования', event: eventDB };
	} catch (error) {
		throw 'Непредвиденная ошибка на сервере. getEventService()';
	}
}

export async function postEventService(eventId, event) {
	try {
		const eventDB = await Event.findOneAndUpdate({ _id: eventId }, { $set: event });
		return { message: 'Изменения соревнования сохранены!', event: eventDB };
	} catch (error) {
		throw 'Непредвиденная ошибка на сервере. postEventService()';
	}
}
