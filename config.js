import { config } from 'dotenv';
config();

export const { PORT, GOOGLE_APP_PASS, GOOGLE_APP_EMAIL } = process.env;

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
    user: GOOGLE_APP_EMAIL,
    pass: GOOGLE_APP_PASS,
  },
};

export const RegistEmail = (
  userName,
  token,
  host = 'https://bnm.com'
) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>B & M</title>
</head>
<body>
  <h3>${userName}님 반값습니다!</h3>
  <div>
    가입을 완료하시려면 아래 가입 승인 버튼을 눌러주세요~
  </div>
  <p><a href="${host}/auth?token=${token}">승인하기</a></p>
</body>
</html>`;
