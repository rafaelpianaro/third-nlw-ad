import express from 'express';
import path from 'path'

import './database/connection'
import routes from './routes'

const app = express();

app.use(express.json());
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.listen(3333);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE

// GET = Buscar uma informação (Lista, Item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Parâmetros

// Query Params: http://localhost:3333/users?search=rafael&page=2
// Route Params: DELETE http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/ (Identificar um recurso)