const request = require('supertest');
const app = require('../../../app');

describe('Portfolio related processes', () => {
  it('should add assets to portfolio', (done) => {
    request(app).post('/user/portfolio/add').expect(200);
    done();
  });

  it('should view portfolio', (done) => {
    request(app).get('/user/portfolio').expect(200);
    done();
  });
});
