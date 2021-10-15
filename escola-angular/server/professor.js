var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var professorSchema = new Schema({
    name: String,
    materia: String
});

module.exports = mongoose.model("Professor", professorSchema) 
