require('./config/config');

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// ==============================
// MIDDLEWARES
// ==============================
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.disable('x-powered-by');

// ==============================
// ROUTES GLOBAL CONFIG
// ==============================
app.use(require('./routes/index'));

// ==============================
// EXECUTION
// ==============================
// require('./database');
 
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});