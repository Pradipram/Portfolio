import { transporter } from "../sendGrid/sendGridTransporter.js";

export const sendEmailController = async(req,res) =>{
    try{
        const {name,email,msg} = req.body;
        //email matter
        await transporter.sendMail({
            to:'pradipramnawa@gmail.com',
            from:'pradipramnawa@gmail.com',
            subject:"I want to talk to you",
            html:`
                <h5>Details Information</h5>
                <ul>
                    <li><p>Name : ${name}</p></li>
                    <li><p>email: ${email}</p></li>
                    <li><p>message:${msg}</p></li>
                </ul>
            `
        })
        res.status(200).send({
            success:true,
            msg : "Your Message Sent Successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:true,
            msg:'Internal server error',
            err
        })
    }
}