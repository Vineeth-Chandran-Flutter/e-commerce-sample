import express, { Router } from "express";
import { userController } from "../controllers/userController";

const userRoute: Router = express.Router()

userRoute.get("/allProducts", userController.allProducts);
userRoute.get("/searchProduct", userController.searchProduct);
userRoute.post("/addToCart", userController.addToCart);
userRoute.post("/addAddress", userController.addAddress);
userRoute.get("/checkout", userController.checkout);
userRoute.get("/getOrders", userController.getOrders);
userRoute.get("/getCart", userController.getCart);
userRoute.delete("/removeFromCart", userController.removeFromCart);
userRoute.delete("/deleteAddress", userController.deleteAddress);

export default userRoute;