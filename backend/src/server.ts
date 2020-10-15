import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connection'

const app = express();

app.use(express.json());

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

app.post('/orphanages', async(request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends 
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });
    await orphanagesRepository.save(orphanage)
    return response.status(201).json({orphanage});
})

app.listen(3333);