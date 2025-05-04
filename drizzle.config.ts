import {env} from './src/env/server';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/backend/db/migrations',
  schema: './src/backend/db/schema.ts',
  dialect: 'postgresql',
  strict:true,
  verbose:true,
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});
