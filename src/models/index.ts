import { Sequelize } from "sequelize";
import { dbConfig } from "../config/dbConfig";


const sequelize: Sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
});

export  {sequelize};


