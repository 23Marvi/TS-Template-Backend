/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// noinspection JSUnresolvedVariable

require("ts-node/register");

const sequelizeDb = require("./src/config/sequalizeDB").sequelizeDb;
require("./src/utils/umzug-utils").Migrator(sequelizeDb).runAsCLI();
