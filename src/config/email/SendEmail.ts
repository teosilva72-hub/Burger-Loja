import nodemailer from 'nodemailer';
import 'dotenv/config';

export default new class {
    async SendEmail(data: any, html:string) {
        let transporter = nodemailer.createTransport({
            host: process.env.emailSmtp,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.emailUser, // generated ethereal user
                pass: process.env.emailPass, // generated ethereal password
            }
        });

        transporter.sendMail(await this.MailOption(data, html), (error, info)=>{
            if(error) console.log(error);
            else console.log(info);
        });
    }

    async MailOption(data:any, html:string){
        return{
            from: process.env.emailUser,
            to: data.email,
            subject: 'Token de validação.',
            html: `${html}`
        }
    }
}