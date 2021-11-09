const request = require('supertest');
const app = require('../../../app');

describe('Profile related processes', () => {
  it('should show profile', (done) => {
    request(app).get('/user/profile').expect({}).expect(200);
    done();
  });

  it('should update profile', (done) => {
    request(app).post('/user/profile').expect(200);
    done();
  });
});
