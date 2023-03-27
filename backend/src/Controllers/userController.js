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


//=================================== get closest values controller  =========================================================================//

const getValues = async (req, res) => {

    function findClosest(numbers, target) {
        let closest = numbers[0]
        let diff = Infinity
        for (let i = 0; i < numbers.length; i++) {
            let val = Math.abs(numbers[i] - target)
            if (numbers[i] == target) {
                closest = target
            } else if (val < diff) {
                closest = numbers[i]
                diff = val
            }
        }

        return closest;
    }

    let name
    let values
    con.query('SELECT * FROM user', (error, result) => {

        if (result) {
            let currUser = result.slice(-1)
            let obj = currUser[0]
            name = Object.values(obj)[1]

            let data = result.slice(-1)
            let objvalue = data[0]
            values = Object.values(objvalue)[2]

        }

        if (error) error;
    })

    const url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e4d5ec3699c27ec136f5379d54c203b8`;
    let kelvin = 273

    const response = await axios.get(url);
    let temp = Math.floor(response.data.main.temp - kelvin)
    let temperature = temp + "°C"

    let closest = findClosest(values.split(","), temp)

    return res.status(200).send({ status: true, message: "temp data access successfully", name, closest, temperature });


}


module.exports.postUser = postUser
module.exports.getValues = getValues
