import { Hono } from 'hono'

const test = new Hono()

test.get('/', c => {
    return c.json({"message": "test"})
})

export default test