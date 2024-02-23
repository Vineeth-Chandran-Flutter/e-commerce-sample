import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface OrderItemAttributes {
    id: any;
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
}

export class OrderItemModel extends Model<OrderItemAttributes> implements OrderItemAttributes {
    public id: any;
    public orderId!: number;
    public productId!: number;
    public quantity!: number;
    public price!: number;

    static initModel(sequelize: any) {
        return OrderItemModel.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            orderId: {
                type: DataTypes.INTEGER
            },
            productId: {
                type: DataTypes.INTEGER
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            price: {
                type: DataTypes.DOUBLE
            }

        }, { sequelize, modelName: "orderItem" });
    }
}

OrderItemModel.initModel(sequelize);