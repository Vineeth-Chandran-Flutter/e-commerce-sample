import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface ProductAttributes {
    id: any;
    productName: string;
    description: string;
    price: number;
    totalQuantity: number;
}

export class ProductModel extends Model<ProductAttributes> implements ProductAttributes {
    public id!: any;
    public productName!: string;
    public description!: string;
    public price!: number;
    public totalQuantity!: number;
    static initModel(sequelize: any) {
        return ProductModel.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            productName: {
                type: DataTypes.STRING

            },
            description: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.DOUBLE
            },
            totalQuantity: {
                type: DataTypes.INTEGER
            }
        }, { sequelize, modelName: "product" })
    }
}

ProductModel.initModel(sequelize)