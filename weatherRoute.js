module.exports = function(app){
    const weather = require('./weatherController');

    app.get('/weather', home.getWeather);

};