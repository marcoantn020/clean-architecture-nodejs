import pgPromise from "pg-promise";
import { config } from "../../config/config";

const pgp = pgPromise({});

const db = pgp({
    user: config.db.user,
    password: config.db.password,
    host: config.db.host,
    port: config.db.port,
    database: config.db.database,
    idleTimeoutMillis: 100
});

export default db;