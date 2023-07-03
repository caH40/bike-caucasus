import mongoose from 'mongoose';
import prk from 'mongoose';
const { Schema, model } = prk;

const albumSchema = new Schema({
	galleryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' },
	name: { type: String, unique: true, required: true },
	date: Number,
	description: String,
	urlCover: { type: String, unique: true, required: true },
	urlAlbum: { type: String, unique: true, required: true },
	creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const Album = model('Album', albumSchema);
