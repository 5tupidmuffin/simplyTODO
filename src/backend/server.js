const express = require('express');
const router = require('./routes/allroutes');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/v1/', router);

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).send('<a href="/api/v1/"> API <a>')
})

app.listen(PORT, () => {
    console.log(`server live on port: ${PORT}`);
})

