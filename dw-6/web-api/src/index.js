import express from 'express';
import calculator from './util/num.js';
import formatter from './util/text.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de utilitários! Use /util/num/:action para operações numéricas ou /util/text/:action para operações de texto.');
});

// Rota para operações numéricas
app.get('/util/num/:action', (req, res) => {
    const { action } = req.params;
    const input = req.query.input.split(",");
  
    const result = {
      action,
      input,
      output: calculator(input, action),
    };
    res.send(result);
});

// Rota para operações de texto (método GET)
app.get('/util/text/:action', (req, res) => {
    const { action } = req.params;
    const input = req.query.input; // Corrigir para capturar input da query string

    if (!input || typeof input !== 'string') {
        return res.status(400).send({ error: 'Parâmetro "input" é necessário e deve ser uma string.' });
    }

    const result = {
        action,
        input,
        output: formatter(input, action),
    };
    res.send(result);
});

// Rota para operações de texto (método POST)
app.post('/util/text/:action', (req, res) => {
    const { action } = req.params;
    const { input } = req.body;

    if (!input || typeof input !== 'string') {
        return res.status(400).send({ error: 'Parâmetro "input" é necessário no corpo da requisição e deve ser uma string.' });
    }

    const result = {
      action,
      input,
      output: formatter(input, action),
    };
    res.send(result);
});

app.listen(3000, () => {
    console.log('App ouvindo em http://localhost:3000');
});
