import pgPromise from "pg-promise";

const pgp = pgPromise({});

const db = pgp({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "database_app",
    idleTimeoutMillis: 100
});

export default db;