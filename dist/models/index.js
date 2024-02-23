"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dbConfig_1 = require("../config/dbConfig");
const sequelize = new sequelize_1.Sequelize(dbConfig_1.dbConfig.db, dbConfig_1.dbConfig.user, dbConfig_1.dbConfig.password, {
    host: dbConfig_1.dbConfig.host,
    dialect: 'mysql'
});
exports.sequelize = sequelize;
