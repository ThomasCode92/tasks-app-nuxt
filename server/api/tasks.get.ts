import db from "~/lib/db";

export default defineEventHandler(() => {
  return db.query.tasks.findMany();
});
