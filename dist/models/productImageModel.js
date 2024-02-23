"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageModel = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class ProductImageModel extends sequelize_1.Model {
    static initModel(sequelize) {
        return ProductImageModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: sequelize_1.DataTypes.INTEGER
            },
            imagePath: {
                type: sequelize_1.DataTypes.STRING
            }
        }, { sequelize, modelName: "productImage" });
    }
}
exports.ProductImageModel = ProductImageModel;
ProductImageModel.initModel(_1.sequelize);
