import axios from 'axios';
import { myAxios } from './axios';
const server = process.env.REACT_APP_SERVER_EXPRESS;

export async function getNews(page, newsOnPage) {
	try {
		const response = await axios.get(`${server}/api/news/${page}/${newsOnPage}`);
		return response.data.news;
	} catch (error) {
		console.log(error);
	}
}
export async function getNewsOne(newsId) {
	try {
		const response = await axios.get(`${server}/api/newsone/${newsId}`);
		return response.data.newsOne;
	} catch (error) {
		console.log(error);
	}
}
export async function postNews(formData) {
	try {
		const response = await myAxios(`/api/post-news`, {
			method: 'POST',
			data: formData,
		});
		return response;
	} catch (error) {
		throw error;
	}
}
export async function editNews(formData) {
	try {
		const response = await myAxios(`/api/edit-news`, {
			method: 'POST',
			data: formData,
		});
		return response;
	} catch (error) {
		throw error;
	}
}

export async function getNewsEdit() {
	try {
		const response = await myAxios(`${server}/api/news-all`, { method: 'GET' });
		return response.data.news;
	} catch (error) {
		console.log(error);
	}
}

export async function postDeleteNews(newsId) {
	try {
		const response = await myAxios(`${server}/api/news-delete`, {
			method: 'POST',
			data: { newsId },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function getNewsInteractive(newsId) {
	try {
		const response = await myAxios.get(`${server}/api/news-interactive-get/${newsId}`);
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function postNewsInteractive(newsId, target) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: `${server}/api/news-interactive`,
			data: { newsId, target },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
