const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

const mockApi = require('./mock-api');
const books = require('./mock-data');
const proxyApi = require('./proxy-api');
const { appUrl, issuerUrl } = require('./proxy-configs');

const app = express();
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json());
const port = 3000;

isMock = process.argv[2] === 'mock';

// Mock API 
if (isMock) {
    mockApi(app, books);
}

// Proxy API
else {
    proxyApi(app, fetch, issuerUrl, appUrl);
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));