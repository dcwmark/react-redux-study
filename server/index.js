import express from 'express';

let app = express();

app.get('/*', (req, res) => {
    res.send('server index.js ...');
});

app.listen(3000, () => {
    console.log('Listening on localhost:3000');
});
