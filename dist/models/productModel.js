"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class ProductModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return ProductModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            sellerId: {
                type: sequelize_1.DataTypes.INTEGER
            },
            productName: {
                type: sequelize_1.DataTypes.STRING
            },
            description: {
                type: sequelize_1.DataTypes.STRING
            },
            price: {
                type: sequelize_1.DataTypes.DOUBLE
            },
            totalQuantity: {
                type: sequelize_1.DataTypes.INTEGER
            }
        }, { sequelize, modelName: "product" });
    }
}
exports.ProductModel = ProductModel;
ProductModel.initModel(_1.sequelize);
