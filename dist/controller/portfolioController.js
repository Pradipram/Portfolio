"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailController = void 0;
const sendGridTransported_1 = require("../sendGrid/sendGridTransported");
const sendEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, msg } = req.body;
        console.log("comming in backend with following properties", name, email, msg);
        //email matter
        const mailResponse = yield sendGridTransported_1.transporter.sendMail({
            to: "pradipramnawa@gmail.com",
            from: "pradipramnawa@gmail.com",
            subject: "I want to talk to you",
            html: `
                <h5>Details Information</h5>
                <ul>
                    <li><p>Name : ${name}</p></li>
                    <li><p>email: ${email}</p></li>
                    <li><p>message:${msg}</p></li>
                </ul>
            `,
        });
        console.log("mailresponse", mailResponse);
        res.status(200).send({
            success: true,
            msg: "Your Message Sent Successfully",
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: true,
            msg: "Internal server error",
            err,
        });
    }
});
exports.sendEmailController = sendEmailController;
