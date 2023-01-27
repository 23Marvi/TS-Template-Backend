import { IConfig } from "../interfaces/config/config.interface";

export const config: IConfig = {
    // General
    port: process.env.PORT ? parseInt(process.env.PORT) : 4030,
    applicationName: process.env.APPLICATION || "Epic application",
    privateJwtKey: process.env.PRIVATE_JWT_KEY || "./jwt-keys/private.pem",
    publicJwtKey: process.env.PUBLIC_JWT_KEY || "./jwt-keys/public.pem",

    // Database
    databaseHost: process.env.DATABASE_HOST || "localhost",
    databasePort: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 5420,
    database: process.env.DATABASE || "DB_NAME",
    databaseUser: process.env.DATABASE_USER || "DB_USER",
    databasePassword: process.env.DATABASE_PASSWORD || "DB_PASSWORD",

    // Auth
    jwtValidityInSeconds: process.env.JWT_VALIDITY ? parseInt(process.env.JWT_VALIDITY, 10) : 86400
}
