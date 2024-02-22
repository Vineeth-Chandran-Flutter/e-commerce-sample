import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from ".";


interface UserAttributes {
    id: any;
    name: string;
    email: string;
    password: string;
    phone: string;
    userType: number;

}

export class UserModel extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public phone!: string;
    public userType!: number;
    static initModel(sequelize: any) {
        return UserModel.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            phone: {
                type: DataTypes.STRING
            },
            userType: {
                type: DataTypes.INTEGER
            }
        }, {
            sequelize,
            modelName: 'User',
        })
    }
}

UserModel.initModel(sequelize)