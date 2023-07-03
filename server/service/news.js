import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

import { KudosNews } from '../Model/KudosNews.js';
import { News } from '../Model/News.js';
import { CommentNews } from '../Model/CommentNews.js';

export async function getNewsService(page, newsOnPage) {
	try {
		const newsDB = await News.find().populate('kudoses');
		newsDB.reverse();

		const quantityPages = Math.ceil(newsDB.length / newsOnPage);
		const newsCurrentPage = newsDB.slice(newsOnPage * page - newsOnPage, newsOnPage * page);

		return { message: `Новости`, data: { news: newsCurrentPage, quantityPages } };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getNewsService()';
	}
}

export async function getNewsOneService(newsId) {
	try {
		const newsDB = await News.findOne({ _id: newsId });

		return { message: `Новость`, data: newsDB };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getNewsService()';
	}
}

export async function postNewsService(title, textBody, file, userId) {
	try {
		const newsDB = await News.create({
			newsTitle: title,
			newsText: textBody,
			image: (file.destination + file.filename).slice(6),
			postedBy: userId,
			date: Date.now(),
		});

		const kudosNewsDB = await KudosNews.create({ newsId: newsDB._id });
		newsDB.kudoses = kudosNewsDB._id;
		await newsDB.save();

		if (!newsDB) throw 'Ошибка при сохранении новости в БД';
		return { message: `Новость сохранена в БД` };
	} catch (error) {
		throw error;
	}
}

export async function editNewsService(title, textBody, file, newsId) {
	const image = file ? (file.destination + file.filename).slice(6) : undefined;
	try {
		const newsDB = await News.findOneAndUpdate(
			{ _id: newsId },
			{
				$set: {
					newsTitle: title,
					newsText: textBody,
					image,
				},
			}
		);
		if (image) {
			const pathToImage = path.resolve(__dirname, 'build', newsDB.image);
			fs.unlinkSync(pathToImage, error => {
				if (error) throw error;
			});
		}

		if (!newsDB) throw 'Ошибка при сохранении новости в БД';
		return { message: `Новость сохранена в БД` };
	} catch (error) {
		throw error;
	}
}

export async function getAllNewsService() {
	try {
		const newsDB = await News.find().populate({ path: 'postedBy', select: 'username' });
		newsDB.reverse();

		return { message: `Все новости`, data: newsDB };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getAllNewsService()';
	}
}

export async function deleteNewsService(newsId) {
	try {
		const newsDB = await News.findOneAndDelete({ _id: newsId });
		await KudosNews.findOneAndDelete({ _id: newsDB.kudoses });
		await CommentNews.deleteMany({ newsId: newsDB._id });
		const pathToImage = path.resolve(__dirname, 'build', newsDB.image);
		fs.unlinkSync(pathToImage, error => {
			if (error) throw error;
		});

		return { message: `Новость удалена`, data: newsDB };
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. deleteNewsService()';
	}
}

export async function getNewsInteractiveService(newsId, userId) {
	try {
		const newsDB = await News.findOne({ _id: newsId });

		const interactive = {};
		const commentsDB = await CommentNews.find({ newsId });
		interactive.comments = { quantity: commentsDB?.length };

		const kudosDB = await KudosNews.findOne({ _id: newsDB.kudoses });

		const likeQuantity = kudosDB.usersIdLike?.length - kudosDB.usersIdDislike?.length;
		interactive.likes = {
			quantity: likeQuantity > 0 ? likeQuantity : 0,
			userLiked: kudosDB.usersIdLike?.includes(userId),
			userDisliked: kudosDB.usersIdDislike?.includes(userId),
		};

		return { message: 'Количество лайков и комментариев к новости', interactive };
	} catch (error) {
		throw error;
	}
}

export async function postNewsInteractiveService(newsId, target, userId) {
	try {
		const kudosDB = await KudosNews.findOne({ newsId });
		if (!kudosDB) throw 'Не найден документ Kudos для новости';
		let changeDocument = {};
		if (target === 'like' && !kudosDB.usersIdLike.includes(userId))
			changeDocument = { $push: { usersIdLike: userId }, $pull: { usersIdDislike: userId } };

		if (target === 'like' && kudosDB.usersIdLike.includes(userId))
			changeDocument = { $pull: { usersIdLike: userId, usersIdDislike: userId } };

		if (target === 'dislike' && !kudosDB.usersIdDislike.includes(userId))
			changeDocument = { $pull: { usersIdLike: userId }, $push: { usersIdDislike: userId } };

		if (target === 'dislike' && kudosDB.usersIdDislike.includes(userId))
			changeDocument = { $pull: { usersIdLike: userId, usersIdDislike: userId } };

		const kudosSavedDB = await KudosNews.findOneAndUpdate({ newsId }, changeDocument, {
			returnDocument: 'after',
		});

		const interactive = {};
		const likeQuantity = kudosSavedDB.usersIdLike?.length - kudosSavedDB.usersIdDislike?.length;
		interactive.likes = {
			quantity: likeQuantity > 0 ? likeQuantity : 0,
			userLiked: kudosSavedDB.usersIdLike?.includes(userId),
			userDisliked: kudosSavedDB.usersIdDislike?.includes(userId),
		};

		return { message: 'Количество лайков и комментариев к новости', interactive };
	} catch (error) {
		throw error;
	}
}
