import { Application } from '../declarations';
import users from './users/users.service';
import list from './list/list.service';
import task from './task/task.service';
import clientV10List from './client/v1.0/list/list.service';
import clientV10List from './client/v1.0/list/list.service';
import clientV10Task from './client/v1.0/task/task.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(list);
  app.configure(task);
  app.configure(clientV10List);
  app.configure(clientV10List);
  app.configure(clientV10Task);
}
