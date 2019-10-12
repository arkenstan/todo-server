// client/v1.0/list-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';

export default function (app: Application) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const list = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  return mongooseClient.model('list', list);
}
