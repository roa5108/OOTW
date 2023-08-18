const express = require('express');
const app = express();
const fetch = require('node-fetch');

const port = 3000; // 사용할 포트 번호

app.use(express.static('public')); // 정적 파일 제공을 위한 설정

app.get('/weather', async (req, res) => {
    try {
        //const city = req.query.city; // 클라이언트에서 전달한 도시 이름
        const city = 'Seoul';
        const apiKey = '5fc05e00b4b237301b07feb310b7ff8f';
        const lang = 'kr'; // 원하는 언어 코드
        const dayApiURI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric`;
        
        const response = await fetch(dayApiURI);
        const weatherData = await response.json();

        res.json(weatherData); // 클라이언트에 JSON 데이터 전달
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
