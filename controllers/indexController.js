require("../config/mongoDbConnect");



const index = (req, res) => {
  res.status(200).send("Welcome 🙌 ");
}

module.exports = {index}