const { Router, response } = require('express');

const EstudanteController = require('./Controllers/EstudanteController');
const Autenticação = require('./Controllers/AutenticateController');

const routes =  Router();

routes.post('/Register', EstudanteController.store );

routes.post('/login', Autenticação.store2 );

module.exports = routes;