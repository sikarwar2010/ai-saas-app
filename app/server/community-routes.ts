import { Hono } from "hono";
import { db } from "@/db";
import { communities } from "@/db/schema";

type Variables = {
  userId: string;
};

const communitiesApp = new Hono<{ Variables: Variables }>().get(
  "/all",
  async (c) => {
    const allCommunities = await db.select().from(communities);
    return c.json(allCommunities);
  },
);

export { communitiesApp };
