const mongoose = require("mongoose");
// Connexion à mongoDB
const mongoConnect = mongoose.connect('mongodb+srv://NykoTech:2biBAYujpqFfTtzi@cluster0.lzaotih.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoConnect