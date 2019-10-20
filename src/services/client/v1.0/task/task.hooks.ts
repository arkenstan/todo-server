import * as authentication from '@feathersjs/authentication';
import dtoExchange from '../../../../hooks/dto-exchange';
import { preventChanges, disallow } from 'feathers-hooks-common';
import checkListExists from '../../../../hooks/check-list-exists';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;
const { setField } = require('feathers-authentication-hooks');

const options = {
	fieldsToPreventChanges: [ 'createdBy' ]
};

// const dtoOptions = {
// 	incoming: { taskId: '_id', title: 'content', status: 'completed', owner: 'createdBy' },
// 	outgoing: { _id: 'taskId', content: 'title', completed: 'status', createdBy: 'owner' }
// };

export default {
	before: {
		all: [ authenticate('jwt') ],
		find: [],
		get: [],
		create: [],
		update: [ disallow('external') ],
		patch: [ preventChanges(true, ...options.fieldsToPreventChanges) ],
		remove: []
	},

	after: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	},

	error: {
		all: [],
		find: [],
		get: [],
		create: [],
		update: [],
		patch: [],
		remove: []
	}
};
