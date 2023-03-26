# Web APP

Key points

Created a web page where users can submit names and a corresponding value(value should be related to API values format)
for n numbers of times, which push in an SQL database.
Then, compare these values with real-time data from an API, such as weather or stock data.
Finally, display the person's name with the closest match.

POST /api/post

- Saved user data ( name, value ) from the request body.
- For storing data MySQL database is used.

GET /api/get

- Fetching the data eg. temperature, and city from real-time API from Weather API.
- Taking value from the body when even the user entered and sent it as a real-time API query.
- After that fetch the temperature.

GET api/get/user

- Returns the current user name from database.

Response

![webapp Screenshot 2023-03-26 ](https://user-images.githubusercontent.com/102968216/227775842-4055183d-4d45-4bc1-96ab-0693c51c0fe6.png)

