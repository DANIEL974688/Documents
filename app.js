const express =  require('express');

const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');

// importation des routes
const userRoutes = require('./routes/user');

// gestion des problèmrs CORS (Cross Origin Request Sharing)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

   
  
  mongoose.connect('mongodb+srv://projet_p6:0qBMd1YTiAkbudBt@cluster0.dpgqw.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));  
  
app.use (express.json());

app.post('./api/auth/login',(req, res, next )=>{
  console.log(req.body);
    res.status(201).json({message : 'Objet reçu!'});
});

app.use(bodyParser.json());

app.use('./api/auth', userRoutes);

module.exports = app;