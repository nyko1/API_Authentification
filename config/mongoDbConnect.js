const mongoose = require("mongoose");

const { MONGO_URI } = process.env;
mongoose.set("strictQuery", false);
// Connexion à mongoDB
const mongoConnect = mongoose.connect(MONGO_URI,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mongoConnect