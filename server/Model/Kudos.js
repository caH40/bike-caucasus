import mongoose from 'mongoose';
import prk from 'mongoose';

const { Schema, model } = prk;

const kudosSchema = new Schema({
	usersIdLike: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	usersIdDisLike: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	views: { type: Number, default: 0 },
});

export const Kudos = model('Kudos', kudosSchema);
