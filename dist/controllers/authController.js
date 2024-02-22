"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController = {
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        res.status(200).json({ message: "logged in successfully", email: email, password: password });
    },
    signUp: (req, res) => {
        const body = req.body;
        console.log(body);
        res.status(201).json({ message: "user registration successfully", data: body });
    },
    forgotPassword: (req, res) => { },
    logout: (req, res) => { }
};
exports.default = authController;
