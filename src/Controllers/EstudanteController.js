const Estudante = require(''); //Altere aqui o seu require

module.exports = {
    async store(request, response) {

        const{ name , email, senha, usuário } = request.body;

        let estudante = await Estudante.findOne({ email });

            if(!estudante){
                estudante = await Estudante.create({
                    name,
                    email,
                    senha,
                    usuário,
                    unlock: 0,
                    
                });

                estudante.senha = undefined;

            return response.json(estudante);    

}} }