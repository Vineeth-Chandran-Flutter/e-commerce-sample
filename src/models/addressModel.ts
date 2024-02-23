import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface AddressAttributes {
    id: any;
    userId: number;
    building: string;
    po: string;
    city: string;
    landkmark: string;
    pin: string;
}
export class AddressModel extends Model<AddressAttributes> implements AddressAttributes {
    id: any;
    userId!: number;
    building!: string;
    po!: string;
    city!: string;
    landkmark!: string;
    pin!: string;
    static initModel(sequelize: any) {
        return AddressModel.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userId: {
                type: DataTypes.INTEGER
            },
            building: {
                type: DataTypes.STRING
            },
            po: {
                type: DataTypes.STRING
            },
            city: {
                type: DataTypes.STRING
            },
            landkmark: {
                type: DataTypes.STRING
            },
            pin: {
                type: DataTypes.STRING
            }
        }, { sequelize, modelName: "address" });
    }
}

AddressModel.initModel(sequelize);