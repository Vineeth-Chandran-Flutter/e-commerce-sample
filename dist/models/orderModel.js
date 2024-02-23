"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class OrderModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return OrderModel.init({
            orderId: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            totalAmount: {
                type: sequelize_1.DataTypes.DOUBLE,
            },
            orderDate: {
                type: sequelize_1.DataTypes.DATE,
            },
            paymentType: {
                type: sequelize_1.DataTypes.ENUM
            }
        }, { sequelize, modelName: "Order" });
    }
}
exports.OrderModel = OrderModel;
OrderModel.initModel(_1.sequelize);
