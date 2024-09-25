import { Hono } from 'hono'
import test from './test'

const v1 = new Hono()

v1.route('/test', test)

export default v1