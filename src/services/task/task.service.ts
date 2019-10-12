// Initializes the `task` service on path `/task`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Task } from './task.class';
import createModel from '../../models/task.model';
import hooks from './task.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'task': Task & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/task', new Task(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('task');

  service.hooks(hooks);
}
