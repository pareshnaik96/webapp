const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");  //cors access our backend api in react frontend
const route = require('./Routes/route')



app.use(cors());
app.use(express.json());  //for converting the data into json
app.use(bodyParser.urlencoded({ extended: true })); //for encording the url


app.use('/', route);


app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.PORT || 4000}`);
});