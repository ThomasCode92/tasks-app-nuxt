import { InsertTasksSchema } from "~/lib/db/schema";

export default defineEventHandler(async event => {
  const result = await readValidatedBody(event, InsertTasksSchema.safeParse);

  if (!result.success) {
    const error = createError({
      statusCode: 422,
      statusMessage: "Invalid task",
    });
    return sendError(event, error);
  }

  return { task: result.data };
});
