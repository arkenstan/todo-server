import * as authentication from '@feathersjs/authentication';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;
const { setField } = require('feathers-authentication-hooks');

const setUserId = setField({ from: 'params.user._id', as: 'data.createdBy' });
const limitToUser = setField({ from: 'params.user._id', as: 'params.query.createdBy' });

export default {
	before: {
		all: [ authenticate('jwt') ],
		find: [ limitToUser ],
		get: [ limitToUser ],
		create: [ setUserId ],
		update: [ limitToUser ],
		patch: [ limitToUser ],
		remove: [ limitToUser ]
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
