import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import v1 from './v1/route/app'

const app = new Hono()

app.use('/', cors())

app.use(logger())

app.route('api/v1', v1)

export default app
