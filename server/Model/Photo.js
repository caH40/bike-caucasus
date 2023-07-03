import pkg from 'mongoose';
const { Schema, model } = pkg;

const photoSchema = new Schema({
	descPhoto: { type: Array },
	authorPhoto: { type: String },
});

export const Photos = model('photos', photoSchema);
