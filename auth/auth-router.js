const bcrypt = require('bcryptjs')
const router = require("express").Router()
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

    module.exports = router