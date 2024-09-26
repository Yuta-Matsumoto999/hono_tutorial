import  { defineConfig, Config } from 'drizzle-kit'

export default defineConfig({
    schema: './src/db/schemas/*',
    out: './src/db/drizzle/staging/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
}) satisfies Config