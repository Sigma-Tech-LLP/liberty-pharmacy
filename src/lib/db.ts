import { neon } from '@neondatabase/serverless';

// This safely falls back if DATABASE_URL is not set so the build doesn't break
// when generating static pages or building without the env var
const connectionString = process.env.DATABASE_URL || '';

export const sql = neon(connectionString);
