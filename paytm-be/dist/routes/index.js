"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const router = express_1.default.Router();
router.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const isUserExist = await db_1.userModel.findOne({
        username: username
    });
    if (isUserExist) {
        res.json({
            msg: "user already exist"
        });
        return;
    }
    else {
        try {
            const hashPassword = await bcrypt_1.default.hash(password, 4);
            const response = await db_1.userModel.create({
                username: username,
                password: hashPassword
            });
        }
        catch (e) {
            res.json({
                msg: "something went wrong try again"
            });
        }
    }
    res.json({
        msg: "signup done"
    });
});
router.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const response = await db_1.userModel.findOne({
        username: username
    });
    if (!response) {
        res.json({
            msg: "user not found please try agin later"
        });
    }
    const hashPassword = response?.password;
    if (!hashPassword) {
        res.json({
            msg: "could not get password"
        });
        return;
    }
    const isPassword = await bcrypt_1.default.compare(password, hashPassword);
    if (isPassword) {
        const token = jsonwebtoken_1.default.sign({
            id: response._id
        }, process.env.JWT_SECRET || "default password");
        res.json({
            msg: token
        });
    }
    console.log(typeof (process.env.JWT_SECRET));
});
exports.default = router;
//# sourceMappingURL=index.js.map