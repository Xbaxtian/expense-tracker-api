const request = require('supertest');
const app = require('../server');

describe('User Endpoints', () => {
it('should get all users', async () => {
    const res = await request(app)
      .get('/users');
    
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
  });

it('shoud create a user', async () => {
    const res = await request(app)
      .post('/users/signup')
      .send({
        "name": "Sebastian",
        "lastname": "Postigo",
        "email": "xbaxtian@hotmail.com",
        "password": "secret",
        "password_confirm": "secret"
      });

    expect(res.statusCode).toEqual(201);
  });

it('should authenticate a user', async () =>{
    const res = await request(app)
      .post('/user/login')
      .send({
        "email": "xbaxtian@hotmail.com",
        "password": "secret",
      });

    expect(res.statusCode).toEqual(200);
  });
});
