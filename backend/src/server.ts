import express from 'express'

const app = express()

app.use(express.json())

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

app.get('/users',(request, response) => {
    return response.json({message: 'Hello World'})
})

app.listen(3333)