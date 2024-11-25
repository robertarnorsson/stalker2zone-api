import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Stalker 2 API')
})

export default app
