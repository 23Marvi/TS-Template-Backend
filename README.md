# Node backend template
This is a template for a node backend using express, typescript and sequelize as ORM.

I've left the most basic setup possible with the following features:
- Express server
- Typescript
- Sequelize ORM
- Swagger
- Eslint
- Migrations

## Getting started
1. Clone the repository
2. Search for `ts-backend-template` and replace it with your project name
3. Run `npm install`
4. Copy the `config.example.ts` file and rename it to `config.ts`
5. Run `npm run dev` to start the server
6. Run `docker run --name YOUR_DB_NAME -e POSTGRES_PASSWORD=PASSWORD -e POSTGRES_USER=USER -e POSTGRES_DB=YOUR_DB_NAME -p 5420:5432 -d postgres:16.1` to start a postgres container
7. Run `npm run watch` to start the file watcher
8. Run `npm run start` to start the server