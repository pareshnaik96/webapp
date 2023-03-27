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

- Fetching the data eg. temperature from real-time API from Weather API.
- Comparing the temperature getting from real-time API and user entered values and return the closest value.

Response

![webapp_screenshot 2023-03-27 213944](https://user-images.githubusercontent.com/102968216/228001288-e7e12478-7541-4eba-85d3-4f7805447b49.png)


