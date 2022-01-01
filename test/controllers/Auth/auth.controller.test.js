/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../../app');

describe('Account creation workflow', () => {
  // beforeAll(()=> {
  //     mongoDB.connect();
  // })
  it('should create an acccount for a user', (done) => {
    request(app)
      .post('/api/signup')
      .expect(
        'Account created successfully, proceed to logging in and adding your portfolio record',
      )
      .expect(200);
    done();
  });

  it('should sign a user into the app', (done) => {
    request(app).post('api/login').expect('login successful!').expect(200);
    done();
  });

  // afterAll((done) => {
  //     mongoDB.disconnect(done);
  // })
});
