const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8080;


app.use(morgan('tiny'));

connectDB();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views/ejs'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./server/routes/router'));

app.listen(3000, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});
