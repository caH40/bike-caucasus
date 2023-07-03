import { CommentNews } from '../Model/CommentNews.js';
import { User } from '../Model/User.js';

export async function postCommentNewsService(comment, userId, newsId) {
	try {
		const commentDB = await CommentNews.create({
			newsId,
			text: comment,
			postedBy: userId,
			date: Date.now(),
		});
		if (!commentDB) throw 'Комментарий не сохранён!';
		return { message: 'Комментарий сохранен на сервере!' };
	} catch (error) {
		throw error;
	}
}

export async function getCommentsNewsService(newsId) {
	try {
		const commentsDB = await CommentNews.find({ newsId }).populate({
			path: 'postedBy',
			select: ['username', 'firstName', 'lastName', 'photoProfile'],
		});

		commentsDB.reverse();
		return { message: 'Комментарии к новости!', data: commentsDB };
	} catch (error) {
		throw error;
	}
}

export async function postCommentDeleteNewsService(commentId, userId) {
	try {
		const userDB = await User.findOne({ _id: userId });
		const filter = ['moderator', 'admin'].includes(userDB.role)
			? { _id: commentId }
			: { _id: commentId, postedBy: userId };

		const commentDB = await CommentNews.findOneAndDelete(filter);
		if (!commentDB) throw 'Комментарий к новости не найден!';
		return { message: 'Ваш комментарии к новости удалён!' };
	} catch (error) {
		throw error;
	}
}
