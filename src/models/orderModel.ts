import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface OrderAttributes{
    orderId:any;
    userId:number;
    totalAmount:number;
    orderDate:Date;
    paymentType:number;

}

export class OrderModel extends Model<OrderAttributes>implements OrderAttributes{
   public orderId!: any;
   public userId!: number;
   public totalAmount!: number;
   public orderDate!: Date;
   public paymentType!: number;

   static initModel(sequelize:any){
    return OrderModel.init({
        orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId:{
            type:DataTypes.INTEGER,
        },
        totalAmount:{
            type:DataTypes.DOUBLE,
        },
        orderDate:{
            type:DataTypes.DATE,
        },
        paymentType:{
            type:DataTypes.ENUM
        }

    },{sequelize,modelName:"Order"});

   }
}
OrderModel.initModel(sequelize);