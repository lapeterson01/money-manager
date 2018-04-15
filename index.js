require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

require('./routes/plaidRoutes')(app);

app.listen(8000, () => {
    console.log('server is running on port 8000');
});