import { eq } from "drizzle-orm";
import { z } from "zod";

import db from "~/lib/db";
import { tasks } from "~/lib/db/schema";

const ParamsSchema = z.object({
  id: z.coerce.number(),
});

export default defineEventHandler(async event => {
  const result = await getValidatedRouterParams(event, ParamsSchema.safeParse);

  if (!result.success) {
    const error = createError({
      statusCode: 422,
      statusMessage: "Invalid task id",
    });
    return sendError(event, error);
  }

  const task = await db.query.tasks.findFirst({
    where: eq(tasks.id, result.data.id),
  });

  if (!task) {
    const error = createError({
      statusCode: 404,
      statusMessage: "Task not found",
    });
    return sendError(event, error);
  }

  return { task };
});
