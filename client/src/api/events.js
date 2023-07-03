import { myAxios } from './axios';

export async function getEvents() {
	try {
		const response = await myAxios.get(`/api/events`);

		return response.data.events;
	} catch (error) {
		throw error;
	}
}

export async function getEvent(eventId) {
	try {
		const response = await myAxios.get(`/api/event/${eventId}`);
		return response;
	} catch (error) {
		throw error;
	}
}
export async function postEvent(eventId, event) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: '/api/event',
			data: { eventId, event },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
