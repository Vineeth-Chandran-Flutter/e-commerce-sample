import express, { Router } from "express";

const sellerRoute: Router = express.Router();

sellerRoute.get("/get-products");
sellerRoute.get('/view-orders');
sellerRoute.patch("/change-order-status");
sellerRoute.get("/view-order-details/:id")

export default sellerRoute;