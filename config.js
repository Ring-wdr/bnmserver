import { config } from 'dotenv';
config();

export const { PORT, GOOGLE_APP_PASS } = process.env;

// export const DBInfo = {
// };
export const mailInfo = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: '587',
  secure: false,
  tls: { rejectUnauthorize: false },
  maxConnections: 5,
  maxMessages: 10,
  auth: {
    user: 'akswnd55@gmail.com',
    passwd: GOOGLE_APP_PASS,
  },
};
