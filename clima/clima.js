const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d80428165b6753f354e56f9e90b8007f&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}