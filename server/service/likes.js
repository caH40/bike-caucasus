import { KudosNews } from '../Model/KudosNews.js';

export async function postLikesService(changesLikes) {
	try {
		if (changesLikes.action === 'like') {
			const checkKudosDB = await KudosNews.findOne({ newsId: changesLikes.newsId });

			//если юзер уже ставил лайк то убираем userId из массива лайков
			if (checkKudosDB.usersIdLike.includes(changesLikes.userId)) {
				checkKudosDB.usersIdLike = checkKudosDB.usersIdLike.filter(
					userId => userId.toString() !== changesLikes.userId
				);
				checkKudosDB.save();
				return { message: `Лайк удалён`, data: checkKudosDB };
			}

			const kudosNewsDB = await KudosNews.findOneAndUpdate(
				{ newsId: changesLikes.newsId },
				{
					$addToSet: { usersIdLike: changesLikes.userId },
					$pull: { usersIdDislike: changesLikes.userId },
				},
				{ returnDocument: 'after' }
			);
			return { message: `Лайк добавлен`, data: kudosNewsDB };
		}

		if (changesLikes.action === 'dislike') {
			const checkKudosDB = await KudosNews.findOne({ newsId: changesLikes.newsId });

			//если юзер уже ставил дизлайк то убираем userId из массива дизлайков
			if (checkKudosDB.usersIdDislike.includes(changesLikes.userId)) {
				checkKudosDB.usersIdDislike = checkKudosDB.usersIdDislike.filter(
					userId => userId.toString() !== changesLikes.userId
				);
				checkKudosDB.save();
				return { message: `Дизлайк удалён`, data: checkKudosDB };
			}

			const kudosNewsDB = await KudosNews.findOneAndUpdate(
				{ newsId: changesLikes.newsId },
				{
					$addToSet: { usersIdDislike: changesLikes.userId },
					$pull: { usersIdLike: changesLikes.userId },
				},
				{ returnDocument: 'after' }
			);
			return { message: `Дизлайк добавлен`, data: kudosNewsDB };
		}

		return;
	} catch (error) {
		console.log(error);
		throw 'Непредвиденная ошибка на сервере. getNewsService()';
	}
}
