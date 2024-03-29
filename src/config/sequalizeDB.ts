import { Sequelize } from "sequelize-typescript";
import { config } from "./config";

const ssl = {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
}

export const sequelizeDb = new Sequelize({
    host: config.databaseHost,
    port: config.databasePort,
    database: config.database,
    dialect: "postgres",
    username: config.databaseUser,
    password: config.databasePassword,
    logging: false,
    models: [ __dirname + "/../db/models/*{.js,.ts}" ],
    modelMatch: (filename, member): boolean => {
        return filename.toLowerCase() === member.toLowerCase();
    },
    ...(config.databaseSSL && { dialectOptions: ssl })
});
