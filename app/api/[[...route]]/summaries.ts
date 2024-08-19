import { z } from "zod";
import { Hono } from "hono";
import { and, eq, inArray } from "drizzle-orm";
import { createId } from "@paralleldrive/cuid2"
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import db from "@/db/drizzle";
import { insertSummarySchema, summary } from "@/db/schema";

const app = new Hono()
    .get(
        "/",
        clerkMiddleware(),
        async (c) => {
        const auth = getAuth(c);

        if (!auth?.userId) {
            return c.json({ error: "Unauthorized" }, 401);
        }
        
        const data = await db
            .select({
                id: summary.id,
                title: summary.title
            })
            .from(summary)
            .where(eq(summary.userId, auth.userId));

        return c.json({ data })
    })
    .post(
        "/",
        clerkMiddleware(),
        zValidator("json", insertSummarySchema.pick({
            title: true,
            sourceType: true,
        })),
        async (c) => {
            const auth = getAuth(c);
            const values = c.req.valid("json")

            if (!auth?.userId) {
                return c.json({ error: "Unauthorized" }, 401);
            }

            const [data] = await db.insert(summary).values({
                id: createId(),
                userId: auth.userId,
                ...values
            }).returning();

            return c.json({ data });
        })
    .post(
        "/bulk-delete",
        clerkMiddleware(),
        zValidator(
            "json",
            z.object({
                ids: z.array(z.string()),
            }),
        ),
        async (c) => {
            const auth = getAuth(c);
            const values = c.req.valid("json");

            if (!auth?.userId) {
                return c.json({ error: "Unauthorized" }, 401);
            }

            const data = await db
                .delete(summary)
                .where(
                    and(
                        eq(summary.userId, auth.userId),
                        inArray(summary.id, values.ids)
                    )
                )
                .returning({
                    id: summary.id,
                });

            return c.json({ data });
        },
    );

export default app;