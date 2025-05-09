import db from "~/lib/db";
import { InsertTasksSchema, tasks } from "~/lib/db/schema";

export default defineEventHandler(async event => {
  const result = await readValidatedBody(event, InsertTasksSchema.safeParse);

  if (!result.success) {
    const error = createError({
      statusCode: 422,
      statusMessage: "Invalid task",
    });
    return sendError(event, error);
  }

  const [created] = await db.insert(tasks).values(result.data).returning();

  return { task: created };
});
