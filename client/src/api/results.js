import axios from 'axios';
import { myAxios } from './axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getResults(eventId) {
	try {
		const response = await axios.get(`${server}/api/results/${eventId}`);
		return response.data.results;
	} catch (error) {
		console.log(error);
	}
}

export async function getResult(resultId) {
	try {
		const response = await axios.get(`${server}/api/result/${resultId}`);
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function postResult(resultForm) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: `${server}/api/result`,
			data: { resultForm },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
export async function deletePostResult(resultId) {
	try {
		const response = await myAxios({
			method: 'DELETE',
			url: `${server}/api/result`,
			data: { resultId },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function postAddResult(resultForm) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: `${server}/api/result-add`,
			data: { resultForm },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function getResultsAthlete(athlete, userId) {
	try {
		const url = athlete
			? `/api/athlete/results?athlete=${athlete}`
			: `/api/athlete/results?userId=${userId}`;
		const response = await axios.get(`${server}${url}`);
		return response.data.results;
	} catch (error) {
		console.log(error);
	}
}
