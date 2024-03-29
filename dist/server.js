"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./routes/auth_route"));
const models_1 = require("./models");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/auth", auth_route_1.default);
// app.use((err:Error,req:Request,res,next)=>{});
models_1.sequelize.sync({ force: false }).then(function () {
    //  UserModel.initModel(sequelize)
    console.log("db connected");
});
app.listen(3000, () => console.log("server started at port 3000"));
