import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import { router } from "../routes/indexVersion";
import swaggerUi = require("swagger-ui-express");
import { config } from "../config/config";

const app = express();
app.disable("x-powered-by");

const applicationTitle = config.applicationName;
const swaggerSpec = swaggerJSDoc({
    swaggerDefinition: {
        info: {
            title: applicationTitle,
            version: "1.0.0"
        },
        basePath: "/v1",
        securityDefinitions: {
            Bearer: {
                type: "apiKey",
                name: "authorization",
                in: "header",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    },
    apis: ["**/routes/**/*.ts"]
    // apis: []
});
const swaggerDocumentOptions = {
    // customCss: '.swagger-ui .scheme-container { display: none; }'
};

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json({ limit: "50MB" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerDocumentOptions));
app.use("/", router);

// export our app
export default app;
