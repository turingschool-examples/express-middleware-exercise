const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.locals.pets = [{type: 'rabbit', name: 'Alan'}];


// Create middleware functions here ------------------------------------->

// 1. First middleware function (apply to only endpoint POST /pets)
// Check that there has been information sent in the request body
// If there is a request body, continue to POST request handler
// If there is not a request body, do not continue and send 422 response



// 2. Second middleware function (apply this function to all endpoints)
// Log data about the request:
// HTTP verb, endpoint, data in the request body, and anything else!



// ---------------------------------------------------------------------->




app.post('/api/v1/pets', (request, response) => {
  // Write functionality to add a pet to app.locals.pets and appropriate response
});


app.get('/api/v1/pets', (request, response) => {
  // Write functionality to return all pets in app.locals.pets
});




app.listen(app.get('port'), () => {
  console.log(`Middleware exercise server running on http://localhost:${app.get('port')}`);
});