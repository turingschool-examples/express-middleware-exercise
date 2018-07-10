const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.locals.pets = [{type: 'rabbit', name: 'Alan'}];


// Create middleware functions here ------------------------------------->

// 1. First middleware function (apply this function to all endpoints)
// Log data about the request:
// HTTP verb, endpoint, data in the request body, and anything else!

const myLogger = (request, response, next) => {
  console.log('Verb:', request.method, 'Endpoint:', request.url, 'Body:', request.body, 'Headers:', request.headers);
  next();
};

app.use(myLogger);

// 2. Second middleware function (apply to only endpoint POST /pets)
// Check that there has been information sent in the request body
// If there is a request body, continue to POST request handler
// If there is not data in the request body, do not continue and send 422 response

const verifyPostBody = (request, response, next) => {
  if (Object.keys(request.body).length === 0) {
    return response.status(422).send('Provide request body info...');
  } else {
    next();
  }
};

// ---------------------------------------------------------------------->




app.post('/api/v1/pets', verifyPostBody, (request, response) => {
  // Write functionality to add a pet to app.locals.pets and appropriate response
  app.locals.pets.push(request.body);
  response.status(201).json(request.body);
});


app.get('/api/v1/pets', (request, response) => {
  // Write functionality to return all pets in app.locals.pets
  response.status(200).json(app.locals.pets);
});


app.listen(app.get('port'), () => {
  console.log(`Middleware exercise server running on http://localhost:${app.get('port')}`);
});