"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controllers/authController"));
const authRoute = express_1.default.Router();
authRoute.post("/login", authController_1.default.login);
authRoute.post("/signUp", authController_1.default.signUp);
authRoute.post("/forgetPassword", authController_1.default.forgotPassword);
authRoute.get("/logout", authController_1.default.logout);
exports.default = authRoute;
