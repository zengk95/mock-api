const express = require('express')
const morgan = require('morgan');
var bodyParser = require('body-parser')

const app = express()
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(bodyParser.json())
const port = 3000

const books = require('./mock-data');
const indexedBooks = {};
books.forEach(book => { indexedBooks[book.id] = book });

app.get('/books', (req, res) => res.send(books))

app.get('/books/:id', (req, res) => res.send(indexedBooks[req.params.id]));

app.post('/books/', (req, res) => {
    console.log(req.body);


})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))