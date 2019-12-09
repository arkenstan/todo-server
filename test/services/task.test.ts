import assert from 'assert';
import app from '../../src/app';

describe("'task' service", () => {
  it('registered the service', () => {
    const service = app.service('task');
    assert.ok(service, 'Registered the service');
  });

  it('creates and processes task, adds user information', async () => {
    const user = await app
      .service('users')
      .create({ email: 'createTaskUser@example.com', password: 'supersecret' });
    const params = { user };
    const task = await app
      .service('task')
      .create({ content: 'Task 1', additional: 'should be removed' }, params);

    assert.equal(task.content, 'Task 1');
    assert.equal(task.createdBy, user._id);
    assert.ok(!task.additional);
  });
});
