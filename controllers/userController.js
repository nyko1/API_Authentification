require("../config/mongoDbConnect");

const User = require('../models/userModel') //import models
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const register = async (req,res) => {

  // Our register logic starts here
  try {
    // Get user input
    const { nom, prenoms, email, password } = req.body;

    // Validate user input
    if (!(email && password && nom && prenoms)) {
      res.status(400).send("Tous les champs sont obligatoires");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      nom,
      prenoms,
      email: email.toLowerCase(), // convertir l'email en miniscule
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;
    
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
}

const login = async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("Tous les champs sont requis");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Email Address or Password");
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
}



const getAllUser = async (req, res) => {
  User.find()
  .then(users => res.status(200).json(users))
  .catch(err => res.status(400).json(err));

}


module.exports = {register, login, getAllUser}