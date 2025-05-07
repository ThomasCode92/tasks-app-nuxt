import { drizzle } from "drizzle-orm/libsql/node";

import env from "../env";
import * as schema from "./schema";

export default drizzle({
  connection: { url: env.DATABASE_URL },
  casing: "snake_case",
  schema,
});
