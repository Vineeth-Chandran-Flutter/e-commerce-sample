"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class UserModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return UserModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING
            },
            email: {
                type: sequelize_1.DataTypes.STRING
            },
            password: {
                type: sequelize_1.DataTypes.STRING
            },
            phone: {
                type: sequelize_1.DataTypes.STRING
            },
            userType: {
                type: sequelize_1.DataTypes.INTEGER
            }
        }, {
            sequelize,
            modelName: 'User',
        });
    }
}
exports.UserModel = UserModel;
UserModel.initModel(_1.sequelize);
