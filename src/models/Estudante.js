const mongoose =  require('mongoose');

const EstudanteSchema = new mongoose.Schema({
   name: {
       type: String,
       require: true,
   },
   email: {
       type: String,
       unique: true,
       require: true,
       lowercase: true
   },
   senha: {
       type: String,
       require: true,
       select: false,
   },
   
   createdAt: {
       type: Date,
       default: Date.now,

   },

}); 

const Estudante =  mongoose.model('Estudante', EstudanteSchema);

module.exports = Estudante;

