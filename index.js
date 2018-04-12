const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./routes/yodleeRoutes')(app);

app.listen(8000, () => {
    console.log('server is running on port 8000');
});