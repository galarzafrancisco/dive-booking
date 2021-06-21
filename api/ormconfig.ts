import { CockroachConnectionOptions } from "typeorm/driver/cockroachdb/CockroachConnectionOptions";

const config: CockroachConnectionOptions = {
    type: "cockroachdb",
    host: "localhost",
    port: 26257,
    username: "developer",
    // password: "roach",
    database: "dive_booking",
    // ssl: true,
    // extra: {
    //   ssl: {
    //     rejectUnauthorized: false,
    //   },
    // },
    //For secure connection:
    /*ssl: {
       ca: fs.readFileSync('certs/cc-ca.crt').toString()
     },*/
    synchronize: true,
    logging: false,
    entities: ["dist/src/**/*.entity.js"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber",
    },
}

export default config;