# ToDoAPI

This project was generated with [EXPRESS, a Framework of NODE](https://expressjs.com/)

## Development server
To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run start` to start the local server
- Navigate to `http://localhost:3003/`

## Application Structure

- `index.js` - The entry point to our application. This file defines our express server. It also requires the routes and models we'll be using in the application.

- `Database/` - This folder contains Database connection and required model. Database connection is an example of ``SINGLETON``.

- `routes/` - This folder contains the route definitions for our API and connects it to MongoDB using mongoose.

##Dependencies
- [body-parser] - to process json object,
- [cors] - to access from cross origin
- [express] - to use framework
- [mongoose] - the MongoDB ODM - to process data
- [mongoose-unique-validator] - to validate model
- [nodemon] - for hot module reload   
