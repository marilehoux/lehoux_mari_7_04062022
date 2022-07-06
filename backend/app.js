const express = require('express');
const mongoose = require('mongoose');
const app = express();

//require ('dotenv').config();

const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

//mongoose.connect('mongodb+srv://projet7OCR:8xolnrjgQFELbf2B@cluster0.akwq3.mongodb.net/?retryWrites=true&w=majority',
mongoose.connect(process.env.CONNECT,
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !? yes'))
  .catch((e) => console.log(e));
  // console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

//app.use('/api/post', postRoutes);
//app.use('/api/auth', userRoutes);

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

module.exports = app;