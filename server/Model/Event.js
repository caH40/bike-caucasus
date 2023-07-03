import pkg from 'mongoose';
const { Schema, model } = pkg;

const eventSchema = new Schema({
	eventName: { type: String, unique: true },
	eventDate: { type: String },
	eventCity: { type: String },
	type: { type: String },
	distance: { type: Number },
	segmentStrava: { type: String },
});

export const Event = model('Event', eventSchema);
