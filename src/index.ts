import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
const main = async () => {
  const orm = await MikroORM.init({
    entities: [],
    dbName: process.env.DB_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    type: "postgresql",
    debug: !__prod__,
  });
};

main();
