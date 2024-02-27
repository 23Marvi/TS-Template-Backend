export interface IConfig {
    port: number;
    applicationName: string;
    privateJwtKey: string;
    publicJwtKey: string;
    databaseHost: string;
    databasePort: number;
    database: string;
    databaseUser: string;
    databasePassword: string;
    databaseSSL: boolean;
    jwtValidityInSeconds: number;
}