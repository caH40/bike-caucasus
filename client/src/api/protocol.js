import { myAxios } from './axios';

export async function postResults(results, event) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: '/api/protocol',
			data: { results, event },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
export async function postDeleteEvent(eventId) {
	try {
		const response = await myAxios({ method: 'DELETE', url: `/api/event`, data: { eventId } });
		return response;
	} catch (error) {
		throw error;
	}
}
