import http from "http";
import { sequelizeDb } from "../config/sequalizeDB";
import app from "./app";
import { Umzug } from "umzug";
import { config } from "../config/config";
import { Migrator } from "../utils/umzug-utils";

const server = http.createServer(app)
const applicationTitle = config.applicationName;
const port = config.port;
let migrator: Umzug;

startServer();
async function startServer(): Promise<void> {
    try {
        try {
            migrator = Migrator(sequelizeDb);
            const pending = await migrator.pending();
            console.log("Pending migrations:", pending);
            await migrator.up();
        } catch (error) {
            console.error("Error:", error);
        }

        await sequelizeDb.sync();
        server.listen(port, "0.0.0.0", () => {
            console.log(`${applicationTitle} - Running on port: ${port}`);
        });
    } catch (error) {
        console.error(error);
    }
}

export type Migration = typeof migrator._types.migration;