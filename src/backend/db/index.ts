import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { env } from '../../env/server.js';

const db = drizzle(env.DATABASE_URL);

export default db;
