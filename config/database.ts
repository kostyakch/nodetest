import { Sequelize } from "sequelize";
export const database = new Sequelize("postgres://postgres:postgres@0.0.0.0:5432/postgres");
