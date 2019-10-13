import { Id, NullableId, Paginated, Params, ServiceMethods } from '@feathersjs/feathers';
import { Application } from '../../../../declarations';

interface Data {
	_id: string;
	content?: string;
	status?: string;
	listRef: string;
	createdBy?: string;
}

interface ServiceOptions {}

export class Task implements ServiceMethods<Data> {
	app: Application;
	options: ServiceOptions;

	constructor(options: ServiceOptions = {}, app: Application) {
		this.options = options;
		this.app = app;
	}

	async find(params?: Params): Promise<Data[] | Paginated<Data>> {
		let result = await this.app.service('task').find(params);
		return result;
	}

	async get(id: Id, params?: Params): Promise<Data> {
		let result = await this.app.service('task').get(id, params);
		return result;
	}

	async create(data: Data, params?: Params): Promise<Data> {
		let result = await this.app.service('task').create(data, params);
		return result;
	}

	async update(id: Id, data: Data, params?: Params): Promise<Data> {
		let result = await this.app.service('task').update(id, data, params);
		return result;
	}

	async patch(id: NullableId, data: Data, params?: Params): Promise<Data> {
		let result = await this.app.service('task').patch(id, data, params);
		return result;
	}

	async remove(id: NullableId, params?: Params): Promise<Data> {
		let result = await this.app.service('task').remove(id, params);
		return result;
	}
}
