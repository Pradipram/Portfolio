// types/nodemailer-sendgrid-transport.d.ts
declare module "nodemailer-sendgrid-transport" {
    import { TransportOptions } from "nodemailer";

    interface SendgridOptions {
        auth: {
            api_key: string;
        };
    }

    function sendgridTransport(options: SendgridOptions): TransportOptions;

    export = sendgridTransport;
}
