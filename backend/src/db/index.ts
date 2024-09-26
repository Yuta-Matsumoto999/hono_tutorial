import { drizzle } from 'drizzle-orm/postgres-js'
import * as postgres from 'postgres'

const queryClient = postgres(process.env.DATABASE_URL!)
export const db = drizzle(queryClient)