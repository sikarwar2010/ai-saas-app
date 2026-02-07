import { auth } from "@clerk/nextjs/server";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { handle } from "hono/vercel";
import { communitiesApp } from "@/app/server/community-routes";
import { db } from "@/db";
import { communities } from "@/db/schema";

const app = new Hono<{
  Variables: {
    userId: string;
  };
}>().basePath("/api");

//error handler
app.onError((err, c) => {
  console.error("API Error:", err);

  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  //database errr
  if (err instanceof Error) {
    if (
      err.message.includes("violates") ||
      err.message.includes("constraint")
    ) {
      return c.json({ error: "Invalid data provided" }, 400);
    }

    if (
      err.message.includes("not found") ||
      err.message.includes("Not found")
    ) {
      return c.json({ error: err.message }, 404);
    }
  }

  return c.json({ error: "Internal Server Error" }, 500);
});

// middleware
app.use("*", async (c, next) => {
  const publicRoutes = ["/api/communities/all"];
  if (publicRoutes.includes(c.req.path)) {
    return await next();
  }

  const session = await auth();
  const userId = session.userId;
  if (!userId) {
    throw new HTTPException(401, { message: "Unauthorized" });
  }
  c.set("userId", userId);
  return await next();
});

app.get("/communities/all", async (c) => {
  const allCommunities = await db.select().from(communities);
  return c.json(allCommunities);
});

const routes = app.route("/communities", communitiesApp);

export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
