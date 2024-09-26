
import { sql } from 'drizzle-orm'
import { pgTable, text, varchar, bigint } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).unique().notNull(),
    password: varchar('password', { length: 256 }).notNull(),
    createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`).notNull(),
})