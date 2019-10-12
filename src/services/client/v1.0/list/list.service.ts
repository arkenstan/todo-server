// Initializes the `client/v1.0/list` service on path `/clientApi/v1.0/list`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../../declarations';
import { List } from './list.class';
import hooks from './list.hooks';

// Add this service to the service type index
declare module '../../../../declarations' {
  interface ServiceTypes {
    'clientApi/v1.0/list': List & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/clientApi/v1.0/list', new List(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('clientApi/v1.0/list');

  service.hooks(hooks);
}
