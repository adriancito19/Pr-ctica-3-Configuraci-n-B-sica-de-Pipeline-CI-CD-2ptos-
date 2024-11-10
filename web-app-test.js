const request = require('supertest');
const app = require('./server');

describe('Server Tests', () => {
  test('GET /api/status should return status OK', async () => {
    const response = await request(app).get('/api/status');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
    expect(response.body.timestamp).toBeDefined();
  });
});
