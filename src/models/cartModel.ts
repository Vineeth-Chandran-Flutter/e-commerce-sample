import { DataTypes, Model } from "sequelize";
import { sequelize } from ".";

interface CartAttributes{
    id:any;
    userId:number;
    productId:number;
    quantiry:number;
}

export class CartModel extends Model<CartAttributes> implements CartAttributes{
   public id: any;
   public userId!: number;
   public productId!: number;
   public quantiry!: number;

   static initModel(sequelize:any){
    return CartModel.init({
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
            
        },
        userId:{
            type:DataTypes.INTEGER
        },
        productId:{
            type:DataTypes.INTEGER
        },
        quantiry:{
            type:DataTypes.INTEGER
        }
    },{sequelize,modelName:"cart"});
   }
}

CartModel.initModel(sequelize)