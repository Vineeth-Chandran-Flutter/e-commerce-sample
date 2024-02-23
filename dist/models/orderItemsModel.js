"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class OrderItemModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return OrderItemModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            orderId: {
                type: sequelize_1.DataTypes.INTEGER
            },
            productId: {
                type: sequelize_1.DataTypes.INTEGER
            },
            quantity: {
                type: sequelize_1.DataTypes.INTEGER
            },
            price: {
                type: sequelize_1.DataTypes.DOUBLE
            }
        }, { sequelize, modelName: "orderItem" });
    }
}
exports.OrderItemModel = OrderItemModel;
OrderItemModel.initModel(_1.sequelize);
