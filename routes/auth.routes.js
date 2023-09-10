const router = require("express").Router();
const bcrypt = require("bcryptjs"); //import password-hashing function
const saltRounds = 10; //set cost factor
const jwt = require("jsonwebtoken"); //import token function
const { isAuthenticated }= require('../middlewares/jwt.middleware')
const User = require("../models/User.model"); //import user model


router.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  // Check if the email or password or name is provided as an empty string
  if (username === "" || email === "" || password === "") {
    res.status(400).json({ message: "Provide email, password and name" });
    return;
  }

  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!passwordRegex.test(password)) {
    res.status(400).json({
      message:
        "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  User.findOne({ username })
    .then((foundUser) => {
      if (foundUser) {
        res.status(400).json({ message: "User already exists." });
        return;
      }

      //creat hashed Password
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Create a new user in the database
      // We return a pending promise, which allows us to chain another `then`
      return User.create({ username: username, email: email, password: hashedPassword });
    })
    .then(() =>{
      res.status(201).json({ username: username, email: email})
    })
    .catch((err) =>{
      console.log(err);
      res.status(500).json({message: "Internal Server Error Signing up"})
    })
  });

  router.post("/login", (req, res) => {
    const { username, password } = req.body;
    // Check if email or password are provided as empty string 
    if (username === '' || password === '') {
      res.status(400).json({ message: "Provide email and password." });
      return;
    }
  
  // Check the users collection if a user with the same email exists
  User.findOne({ username })
    .then((foundUser) => {

      if (!foundUser) {
        // If the user is not found, send an error response
        res.status(401).json({ message: "User not found." })
        return;
      }
  
      // Compare the provided password with the one saved in the database
      const passwordCorrect = bcrypt.compareSync(password, foundUser.password);
  
      if (passwordCorrect) {
        // Deconstruct the user object to omit the password
        const { _id, username } = foundUser;
        
        // Create an object that will be set as the token payload
        const payload = { _id, username };
        // Create and sign the token
        const authToken = jwt.sign( 
          payload,
          process.env.TOKEN_SECRET,
          { algorithm: 'HS256', expiresIn: "6h" }
        );
  
        // Send the token as the response
        res.status(200).json({ authToken: authToken });
      }
      else {
        res.status(401).json({ message: "Unable to authenticate the user" });
      }
  
    })
    .catch(err => res.status(500).json({ message: "Internal Server Error Logging in" }));
  });
  
  router.get('/verify', isAuthenticated, (req, res) => {
    res.status(200).json(req.payload);
  });

  module.exports = router;
