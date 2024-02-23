"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class CartModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return CartModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER
            },
            productId: {
                type: sequelize_1.DataTypes.INTEGER
            },
            quantiry: {
                type: sequelize_1.DataTypes.INTEGER
            }
        }, { sequelize, modelName: "cart" });
    }
}
exports.CartModel = CartModel;
CartModel.initModel(_1.sequelize);
