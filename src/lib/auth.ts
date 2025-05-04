import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/backend/db/index.js";
import * as schema from "@/backend/db/schema/auth-schema";
 
export const auth = betterAuth({
    emailAndPassword:{
        enabled:true,
    },
    database: drizzleAdapter(db, {
        schema: schema,
        provider: "pg", 
    })
});