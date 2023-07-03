import { Kudos } from '../Model/Kudos.js';

export async function countViewsTrail(kudosId, userId) {
	try {
		if (userId === '6274b392673579dda1aa2d42') return;
		const kudosDB = await Kudos.findOneAndUpdate({ _id: kudosId }, { $inc: { views: 1 } });
	} catch (error) {
		throw error;
	}
}
