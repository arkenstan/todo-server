// client/v1.0/list-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
const uuid = require('uuid');

export default function(app: Application) {
	const mongooseClient = app.get('mongooseClient');
	const { Schema } = mongooseClient;
	const list = new Schema(
		{
			refId: { type: String, required: true, default: uuid.v1 },
			name: { type: String, required: true },
			createdBy: { type: String, required: true }
		},
		{
			timestamps: true
		}
	);

	return mongooseClient.model('list', list);
}
