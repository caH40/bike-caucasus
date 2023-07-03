import { myAxios } from './axios';

export async function postCommentNews(comment, newsId) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: '/api/commentnews-post',
			data: { comment, newsId },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function getComments(newsId) {
	try {
		const response = await myAxios({
			method: 'GET',
			url: `/api/comments-get/${newsId}`,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function postCommentDelete(commentId) {
	try {
		const response = await myAxios({
			method: 'POST',
			url: `/api/comments-delete`,
			data: { commentId },
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}
