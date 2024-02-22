import express, { Application } from "express";
import authRoute from "./routes/auth_route";
import { sequelize } from "./models";
import { UserModel } from "./models/userModel";


const app:Application=express();

app.use(express.json());

app.use("/api/auth",authRoute);

sequelize.sync({force:false}).then(function () {
  //  UserModel.initModel(sequelize)
     console.log("db connected");
})

app.listen(3000,()=>console.log("server started at port 3000"))