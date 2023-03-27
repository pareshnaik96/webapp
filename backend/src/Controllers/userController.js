const con = require('../config')
const axios = require('axios')


//==================================== post user controller =========================================================================//


const postUser = (req, res) => {

    const data = req.body;
    con.query('INSERT INTO user SET ?', data, (error, result, fields) => {
        if (error) error;
        res.status(201).send({ status: true, message: "User data saved successfully", result })
    });
}


//=================================== get temp controller  =========================================================================//


const getData = async (req, res) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e4d5ec3699c27ec136f5379d54c203b8`;
    let kelvin = 273

    try {
        const response = await axios.get(url);
        let temperature = Math.floor(response.data.main.temp - kelvin)
        let city = response.data.name

        let weatherData = { temperature, city }

        return res.status(200).send({ status: true, message: "Weather data access successfully", temp: weatherData });

    } catch (error) {
        return res.status(500).send({ status: false, message: 'Error fetching weather data' });
    }

};


//=========================================== get user controller ========================================================================//


// const getUser = (req, res) => {

//     con.query('SELECT * FROM user', (error, result) => {

//         if (result) {
//             let currUser = result.slice(-1)
//             let obj = currUser[0]
//             let name = Object.values(obj)[1]

//             res.status(200).send({ status: false, message: "User name access successfully", user: name })
//         }

//         if (error) error;
//     })
// }



module.exports.postUser = postUser
module.exports.getData = getData
// module.exports.getUser = getUser

//ay57QRHSalD3AhNFnx0Egki8sQSAP7C1

