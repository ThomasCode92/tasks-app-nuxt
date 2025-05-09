import { z } from "zod";

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
});
