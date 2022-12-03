import 'dotenv/config';
declare const _default: {
    SendEmail(data: any, html: string): Promise<void>;
    MailOption(data: any, html: string): Promise<{
        from: string | undefined;
        to: any;
        subject: string;
        html: string;
    }>;
};
export default _default;
