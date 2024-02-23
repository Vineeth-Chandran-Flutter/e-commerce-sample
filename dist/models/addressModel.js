"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class AddressModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return AddressModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER
            },
            building: {
                type: sequelize_1.DataTypes.STRING
            },
            po: {
                type: sequelize_1.DataTypes.STRING
            },
            city: {
                type: sequelize_1.DataTypes.STRING
            },
            landkmark: {
                type: sequelize_1.DataTypes.STRING
            },
            pin: {
                type: sequelize_1.DataTypes.STRING
            }
        }, { sequelize, modelName: "address" });
    }
}
exports.AddressModel = AddressModel;
AddressModel.initModel(_1.sequelize);
