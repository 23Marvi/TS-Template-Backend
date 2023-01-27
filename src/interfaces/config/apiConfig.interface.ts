import { IConfig } from "./config.interface";

export interface IApiConfig extends IConfig {
    bitvavoApiKey: string;
    bitvavoSecret: string;
}