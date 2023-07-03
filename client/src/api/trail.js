import axios from 'axios';
import { myAxios } from './axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getTrails(filter, sort, cardsOnPage, page) {
	try {
		const response = await axios.post(`${server}/api/trails`, {
			filter,
			sort,
			cardsOnPage,
			page,
		});
		return response.data.trails;
	} catch (error) {
		console.log(error);
	}
}

export async function getTrail(trailId, type = 'read') {
	try {
		const response = await myAxios({
			method: 'GET',
			url: `${server}/api/trail?id=${trailId}&type=${type}`,
		});
		return response.data.trail;
	} catch (error) {
		console.log(error);
	}
}

export async function postTrek(trek) {
	try {
		const response = await myAxios({ method: 'POST', url: `/api/trek-post`, data: trek });
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function postFromTrail(dataForm, type) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: `/api/trail-post`,
			data: { dataForm, type },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function getTrailsEdit() {
	try {
		const response = await myAxios(`${server}/api/trail-all`, { method: 'GET' });
		return response;
	} catch (error) {
		console.log(error);
	}
}
export async function postDeleteTrail(trailId) {
	try {
		const response = await myAxios(`${server}/api/trail-delete`, {
			method: 'POST',
			data: { trailId },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
