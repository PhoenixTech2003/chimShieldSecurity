import { getSecurityTeams } from "../db/queries/security-teams";

export type GetSecurityTeamsValues = Awaited<ReturnType<typeof getSecurityTeams>>;