// task-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
const uuid = require('uuid');

export default function(app: Application) {
	const mongooseClient = app.get('mongooseClient');
	const { Schema } = mongooseClient;
	const task = new Schema(
		{
			refId: { type: String, required: true, default: uuid.v1 },
			completed: { type: Boolean, default: false },
			content: { type: String, required: true },
			listRef: { type: String, required: true },
			createdBy: { type: String, required: true }
		},
		{
			timestamps: true
		}
	);

	return mongooseClient.model('task', task);
}
