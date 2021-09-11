const express = require('express');
const morgan = require('morgan');
const router = require('./routes/allroutes');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/', router);
app.disable('etag');

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('<a href="/api/v1/"> API <a>')
})

app.listen(PORT, () => {
    console.log(`server live on port: ${PORT}`);
})

