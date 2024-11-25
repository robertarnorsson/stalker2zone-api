import { Hono } from 'hono'
import { zones } from './data/zones';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Stalker 2 API')
});

app.use('*', (c, next) => {
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type');
  return next();
});

app.get('/zones', (c) => {
  return c.json(zones);
});

export default app
