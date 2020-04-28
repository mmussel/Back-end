const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/userModel');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

router.post('/register', (req,res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            
            res.status(200).json({ 
                message: `Welcome ${user.username}!`,
                token
        });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


function generateToken(user) {
    const payload = {
        subject: user.id, //sub
        username: user.username,
    };
    const options = {
        expiresIn: "1h",
    }
    return jwt.sign(payload, secrets.jwt_secret, options)
} 


module.exports = router;