const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

// Create middleware function here --------->

// ----------------------------------------->


// Apply middleware function to this endpoint
app.get('/api/v1/data', (request, response) => {

});

app.listen(app.get('port'), () => {
  console.log(`Middleware exercise server running on http://localhost:${app.get('port')}`);
});