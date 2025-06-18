import { db } from "./db";
import { users } from "./schema";

async function main() {
  const result = await db.select().from(users);
  console.log(result);
}

main();