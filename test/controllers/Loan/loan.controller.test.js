/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../../app');

describe('Loan application processes', () => {
  it('should apply for loan', (done) => {
    request(app)
      .post('/user/loan/apply')
      .expect({})
      .expect('Successfully applied for loan')
      .expect(200);
    done();
  });

  it('should view loan details', (done) => {
    request(app)
      .get('/user/loan')
      .expect({})
      .expect('Your loan details:')
      .expect(200);
    done();
  });

  it('should pay for loan', (done) => {
    request(app).get('/user/loan/pay').expect(200);
    done();
  });
});
