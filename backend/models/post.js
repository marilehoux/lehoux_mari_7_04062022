const mongoose = require("mongoose");

// schéma du Post pour base de données
const postSchema = mongoose.Schema({
  userId: { type: String, required: true }, // l'identifiant unique de l'utilisateur qui a crée la post
  //date: {type: Date, required:true}, // date de création du post
  content: { type: String, required: false }, // contenu du post
  imageUrl: { type: String, required: false }, // l'URL de l'image du post téléchargé par l'utilisateur
  likes: { type: Number, default: 0}, // nombre d'utilisateurs qui aiment la sauce
  usersLiked: { type: [String] }, // tableau des identifiants des utilisateurs qui ont liké
});

module.exports = mongoose.model("Post", postSchema);