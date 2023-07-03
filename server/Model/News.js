import mongoose from 'mongoose';
import pkg from 'mongoose';
const { Schema, model } = pkg;

const newsSchema = new Schema({
	newsTitle: { type: String, required: true },
	newsText: { type: String },
	image: { type: String },
	postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	kudoses: { type: mongoose.Schema.Types.ObjectId, ref: 'KudosNews' },
	date: { type: Number },
	kudosQuantity: { type: Number },
	commentsQuantity: { type: Number },
	likeUser: { type: Boolean },
	dislikeUser: { type: Boolean },
});

export const News = model('News', newsSchema);
