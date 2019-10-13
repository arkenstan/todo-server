// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';
import { NotFound, BadRequest } from '@feathersjs/errors';

export default (options = {}): Hook => {
	return async (context: HookContext) => {
		const { app, params } = context;

		if (params && params.route && params.route.listId) {
			let checkList = await app
				.service('list')
				._find({ query: { refId: params.route.listId } });
			if (checkList.total !== 1) {
				throw new NotFound(`List Id ${params.route.listId} is invalid.`);
			}
		} else {
			throw new BadRequest(`Invalid request list id not provided.`);
		}

		return context;
	};
};
