// Initializes the `client/v1.0/task` service on path `/clientApi/v1.0/list/:listId/task`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../../declarations';
import { Task } from './task.class';
import hooks from './task.hooks';

// Add this service to the service type index
declare module '../../../../declarations' {
	interface ServiceTypes {
		'clientApi/v1.0/task': Task & ServiceAddons<any>;
	}
}

export default function(app: Application) {
	const paginate = app.get('paginate');

	const options = {
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/clientApi/v1.0/task', new Task(options, app));

	// Get our initialized service so that we can register hooks
	const service = app.service('clientApi/v1.0/task');

	service.hooks(hooks);
}
