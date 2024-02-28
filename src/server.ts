import express, { Application } from "express";
import authRoute from "./routes/auth_route";
import { sequelize } from "./models";
import { UserModel } from "./models/userModel";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import userRoute from "./routes/userRoute";
import sellerRoute from "./routes/sellerRoute";
import { errorHandler } from "./middleware/error_middleware";


const swaggerDoc:any=YAML.load('api_doc/swagger.yaml');
console.log(swaggerDoc);

const app:Application=express();

app.use(express.json());

app.use(errorHandler);

app.use("/api/documentation",swaggerUi.serve,swaggerUi.setup(swaggerDoc))

app.use("/api/auth",authRoute);

app.use("/api/user/",userRoute);

app.use("/api/seller/",sellerRoute)
// app.use((err:Error,req:Request,res,next)=>{});

sequelize.sync({force:false}).then(function () {
  //  UserModel.initModel(sequelize)
     console.log("db connected");
})

app.listen(3000,()=>console.log("server started at port 3000"))