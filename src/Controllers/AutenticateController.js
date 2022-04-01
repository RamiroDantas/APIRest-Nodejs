const Estudante = require(''); //Altere aqui o seu require

module.exports = {

    async store2(request, response){

        const {email, senha} = request.body;

        const user =  await Estudante.findOne({ email }).select('+senha');

        if(!user){
            return response.status(400).send({ error: 'Usuário não encontrado'});           
        }
        //Usar o bcrypt para deixar o código mais clean

        if(! Object.is(senha,user.senha) ){
            return response.status(400).send({ error: 'Senha inválida' });
        }
        
        response.send({ user})
    }

}