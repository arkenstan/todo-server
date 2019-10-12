import * as authentication from '@feathersjs/authentication';
import dtoExchange from '../../../../hooks/dto-exchange';
import { preventChanges } from 'feathers-hooks-common';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;
const { setField } = require('feathers-authentication-hooks');

const addListToParams = setField({ from: 'params.route.listId', as: 'params.query.listRef' });
const addListToData = setField({ from: 'params.route.listId', as: 'data.listRef' });

const options = {
	fieldsToPreventChanges: [ 'createdBy' ]
};

const dtoOptions = {
	incoming: { taskId: '_id', listId: 'listRef', title: 'content', status: 'completed' },
	outgoing: { _id: 'taskId', listRef: 'listId', content: 'title', completed: 'status' }
};

export default {
	before: {
		all: [ authenticate('jwt'), dtoExchange(dtoOptions) ],
		find: [ addListToParams ],
		get: [ addListToParams ],
		create: [ addListToData ],
		update: [ addListToParams ],
		patch: [ addListToParams ],
		remove: [ addListToParams ]
	},

	after: {
		all: [ dtoExchange(dtoOptions) ],
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
