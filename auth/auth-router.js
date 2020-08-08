const bcrypt = require('bcryptjs')
const router = require("express").Router()
const jwt = require("jsonwebtoken")
const Assigners = require("../assigners/assigners-model.js")


router.post("/register", (req, res) => {
    let {username, email, password, phonenumber} = req.body;
    const hash = bcrypt.hashSync(password, 10) 
    Assigners.add({
        username,
        email,
        password: hash,
        phonenumber,
    })
        .then(data => {
        console.log(data)
        res.status(200).json(data)
        })
        .catch(err => {
        console.log(err)
        res.status(500).json({ message: `Something went really poorly` })
        })
    })


    router.post("/login", (req, res) => {
        const { username, password } = req.body
        Assigners.findBy({ username }).first()
          .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
              const payload = {
                userId: user.id,
                username: user.username,
              }
              res.json({ message: `Welcome, ${user.username}!`, token: jwt.sign(payload, process.env.JWT_SECRET)})
            } else {
              res.status(401).json({ message: 'Invalid credential' })
            }
          })
          .catch(err => {
            console.log(err)
          })
      })

    module.exports = router