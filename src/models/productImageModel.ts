import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface ProductImageAttributes {
    id: any;
    productId: number;
    imagePath: string;
}

export class ProductImageModel extends Model<ProductImageAttributes> implements ProductImageAttributes {
    public id: any;
    public productId!: number;
    public imagePath!: string;
    static initModel(sequelize: any) {
        return ProductImageModel.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            productId: {
                type: DataTypes.INTEGER
            },
            imagePath: {
                type: DataTypes.STRING
            }
        }, { sequelize, modelName: "productImage" })
    }
}
ProductImageModel.initModel(sequelize)