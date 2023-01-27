import { SequelizeStorage, Umzug } from "umzug"
import { Sequelize } from "sequelize-typescript";
require("ts-node/register");

export const Migrator = (sequelize: Sequelize): Umzug => {
    return new Umzug({
        migrations: {
            glob: "src/db/migrations/*{.js,.ts}"
        },
        context: sequelize.getQueryInterface(),
        storage: new SequelizeStorage({ sequelize }),
        logger: console
    });
}
