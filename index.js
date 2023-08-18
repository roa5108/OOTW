const express = require('express');
const weatherRouter = require('./weatherRouter'); // weatherRouter.js 파일 경로로 수정

const app = express();

app.use('/', weatherRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});