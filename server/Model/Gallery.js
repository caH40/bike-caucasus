import mongoose from 'mongoose';
import prk from 'mongoose';
const { Schema, model } = prk;

const gallerySchema = new Schema({
	name: { type: String, unique: true, required: true },
	date: Number,
	urlCover: { type: String, unique: true, required: true },
	urlGallery: { type: String, unique: true, required: true },
	creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export const Gallery = model('Gallery', gallerySchema);
