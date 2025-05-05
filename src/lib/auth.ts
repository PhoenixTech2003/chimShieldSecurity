import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "@/db/index.js";
import * as schema from "@/db/schema/auth-schema";
 
export const auth = betterAuth({
    emailAndPassword:{
        enabled:true,
    },
    database: drizzleAdapter(db, {
        schema: schema,
        provider: "pg", 
    })
});