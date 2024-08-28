import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log("Exemplo app ouvindo at http://localhost:3000");
});