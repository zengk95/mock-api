const mockApi = function (app, books) {
    app.get('/books', (req, res) => res.send(books));

    app.get('/books/:id', (req, res) => res.send(books.filter(book => book.id == req.params.id)));

    app.post('/books/', (req, res) => {
        let existingBook = false;;
        for (let i = 0; i < books.length; i++) {
            if (books[i].id == req.body.id) {
                books[i] = req.body;
                existingBook = true;
            }
        }

        if (!existingBook) books.push(req.body);
        res.send(req.body);
    });
};

module.exports = mockApi;