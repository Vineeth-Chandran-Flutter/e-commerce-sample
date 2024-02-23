"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const userModel_1 = require("../models/userModel");
const authController = {
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        res.status(200).json({ message: "logged in successfully", email: email, password: password });
    },
    signUp: (req, res) => {
        const body = req.body;
        models_1.sequelize.sync();
        userModel_1.UserModel.create({
            id: undefined,
            name: body.name,
            email: body.email,
            password: body.password,
            phone: body.phone,
            userType: body.userType
        });
        res.status(201).json({ message: "user registration successfully", data: body });
    },
    forgotPassword: (req, res) => {
        res.status(200).json({ message: "an otp send to your mail" });
    },
    logout: (req, res) => { }
};
exports.default = authController;
