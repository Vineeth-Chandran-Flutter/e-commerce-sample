import { NextFunction, Request, Response } from "express";

export const userController = {

    allProducts: (req: Request, res: Response,) => {
        try {
            
        } catch (error) {
            res.status(500).json({message:"Error while geting product", error:error})
            
        }



    },
    searchProduct: (req: Request, res: Response) => {
        const keyword=req.query.query;

    },
    addToCart: (req: Request, res: Response) => {

    },
    addAddress: (req: Request, res: Response) => {

    },
    checkout: (req: Request, res: Response) => {

    },
    getOrders: (req: Request, res: Response) => {

    },
    getCart: (req: Request, res: Response) => {

    },
    removeFromCart: (req: Request, res: Response) => {

    },
    deleteAddress: (req: Request, res: Response) => {

    }

}