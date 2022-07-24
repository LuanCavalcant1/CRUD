const express = require('express');
const path = require('path');

const server = express();

server.use(express.json());
const pessoas = ['Luan', 'Paulo', 'João', 'Caio']

//server retorna um nome
server.get('/pessoas/:index', (req, res) => {
    const { index } = req.params;

    return res.json(pessoas[index]);
});

//retornar todos os alunos
server.get('/pessoas', (req, res) => {
    return res.json(pessoas)
});

//criar nova pessoa

server.post('/pessoas', (req, res) => {
    const { name } = req.body;
    pessoas.push(name);

    return res.json(pessoas);
});

//atualizar uma pessoa

server.put('/pessoas/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    pessoas[index] = name;
    return res.json(pessoas);
});
//deletar uma pessoa

server.delete('/pessoas/:index', (req, res) =>{
    const { index } = req.params;
    
    pessoas .splice(index,1)
    return res.json({ message: 'A pessoa foi deletada'});
})


server.listen(3000)