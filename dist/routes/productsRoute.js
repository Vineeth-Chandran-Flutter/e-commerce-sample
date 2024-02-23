"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoute = express_1.default.Router();
productRoute.get("/products/getAllProducts");
productRoute.get("/products/search");
exports.default = productRoute;
