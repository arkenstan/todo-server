import assert from 'assert';
import app from '../../../../src/app';

describe('\'client/v1.0/task\' service', () => {
  it('registered the service', () => {
    const service = app.service('clientApi/v1.0/list/:listId/task');

    assert.ok(service, 'Registered the service');
  });
});
