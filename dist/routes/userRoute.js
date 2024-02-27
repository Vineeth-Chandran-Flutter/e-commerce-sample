"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRoute = express_1.default.Router();
userRoute.get("/allProducts", userController_1.userController.allProducts);
userRoute.get("/searchProduct", userController_1.userController.searchProduct);
userRoute.post("/addToCart", userController_1.userController.addToCart);
userRoute.post("/addAddress", userController_1.userController.addAddress);
userRoute.get("/checkout", userController_1.userController.checkout);
userRoute.get("/getOrders", userController_1.userController.getOrders);
userRoute.get("/getCart", userController_1.userController.getCart);
userRoute.delete("/removeFromCart", userController_1.userController.removeFromCart);
userRoute.delete("/deleteAddress", userController_1.userController.deleteAddress);
exports.default = userRoute;
