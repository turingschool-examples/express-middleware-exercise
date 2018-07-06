const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());

app.listen(app.get('port'), () => {
  console.log(`Middleware exercise server running on http://localhost:${app.get('port')}`);
});