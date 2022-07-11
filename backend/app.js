const express = require('express');
const mongoose = require('mongoose');
const app = express();

//require ('dotenv').config(); Important!! Requis pour utiliser les variables d'environenement

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

//modif connexion
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
// connexion à la base de données avec la vairable d'environnement pour masquer le mdp notamment sur dépôt git
mongoose.connect(process.env.CONNECT,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !? yes'))
  .catch(() => console.log('la connexion à la base de données a echouée!'));

  app.use(express.json());

//app.use('/api/post', postRoutes);
app.use('/api/auth', userRoutes);
/* ancien serveur pour la mise en place
app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});
*/
module.exports = app;