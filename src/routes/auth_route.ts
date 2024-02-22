import express, { Router } from "express";
import authController from "../controllers/authController";

const authRoute:Router=express.Router();

authRoute.post("/login",authController.login);

authRoute.post("/signUp",authController.signUp);

authRoute.post("/forgotPasswordVerify",authController.forgotPassword);

authRoute.post("/setNewPassword")

authRoute.get("/logout",authController.logout);

export default authRoute;