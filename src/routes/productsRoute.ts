import express, { Router } from "express";

const productRoute:Router=express.Router();

productRoute.get("/products/getAllProducts");

productRoute.get("/products/search");

export default productRoute;
