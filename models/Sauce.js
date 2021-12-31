//Relié à mongoose
const mongoose = require('mongoose');

//modéle de base de données pour signup (enregistre un nouvel utilisateur)
const sauceSchema = mongoose.Schema({
    userId : {type : String, required : true,},
    name : {type : String, required : true},
    manufacturer : {type : String, required : true},
    description : {type : String, required : true},
    mainPepper : {type : String, required : true},
    imageUrl : {type : String, required : true},
    heat : {type : Number, required : true},
    likes : {type : Number, required : true},
    dislikes : {type : Number, required : true},
    usersLiked: {type : String, userId},
    usersDisliked : {type : String, userId}
});


//exportation du module
module.exports = mongoose.model("Sauce", sauceSchema);