import { Request, Response } from "express";
import { transporter } from "../sendGrid/sendGridTransported";

export const sendEmailController = async (req: Request, res: Response) => {
    try {
        const { name, email, msg } = req.body;
        console.log(
            "comming in backend with following properties",
            name,
            email,
            msg
        );
        //email matter
        const mailResponse = await transporter.sendMail({
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
    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: true,
            msg: "Internal server error",
            err,
        });
    }
};
