import assert from 'assert';
import app from '../../src/app';

describe("'users' service", () => {
  it('registered the service and clear all users', async () => {
    const service = app.service('users');
    assert.ok(service, 'Registered the service');
    await app.service('users')._remove(null);
  });

  it(`creates a user, encrypt password`, async () => {
    const user = await app
      .service('users')
      .create({ email: 'test@example.com', password: 'superSecret' });
    // Make sure password got encrypted
    assert.ok(user.password !== 'superSecret');
  });

  it(`removes password for external requests`, async () => {
    const params = { provider: 'rest' };
    const user = await app
      .service('users')
      .create({ email: 'test2@example.com', password: 'superSecret' }, params);
    assert.ok(!user.password);
  });
});
