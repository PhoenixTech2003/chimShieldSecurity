import db from "../index";
import { securityTeams, teamMembers } from "../schema";
import { user } from "../schema/auth-schema";
import { eq, sql } from "drizzle-orm";
export const getSecurityTeams = async () => {
  try {
    const teams = await db
      .select({
        teamId: securityTeams.id,
        name: securityTeams.name,
        type: securityTeams.type,
        teamLeader: user.name,
        price: securityTeams.price,
        members: sql<number>`COUNT(${teamMembers.id})`
      })
      .from(securityTeams)
      .innerJoin(user, eq(securityTeams.teamLeader, user.id))
      .innerJoin(teamMembers, eq(securityTeams.id, teamMembers.teamId))
      .groupBy(securityTeams.id, user.name);
    return {data: teams, error: null};
  } catch (error) {
    console.error("Error fetching security teams:", error instanceof Error ? error.message : "an unknown error occured while fetching security teams data");
    return {data: null, error: error instanceof Error ? error.message : "Unknown error"};
  }
};
