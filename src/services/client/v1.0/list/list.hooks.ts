import * as authentication from '@feathersjs/authentication';
import { required, preventChanges, disallow } from 'feathers-hooks-common';
import dtoExchange from '../../../../hooks/dto-exchange';
// Don't remove this comment. It's needed to format import lines nicely.
const { authenticate } = authentication.hooks;
const options = {
	fieldsToPreventChanges: [ 'createdBy' ]
};

const dtoOptions = {
	incoming: { listId: '_id', listName: 'name', owner: 'createdBy' },
	outgoing: { _id: 'listId', name: 'listName', createdBy: 'owner' }
};

export default {
	before: {
		all: [ authenticate('jwt'), dtoExchange(dtoOptions.incoming) ],
		find: [],
		get: [],
		create: [ required('listName') ],
		update: [ disallow('external') ],
		patch: [ preventChanges(true, ...options.fieldsToPreventChanges) ],
		remove: []
	},

	after: {
		all: [ dtoExchange(dtoOptions.outgoing) ],
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
