const express = require("express")
const app = express()
const User = require("../models/User")
const { verifyUser, verifySession } = require("../middlewares/CheckUser")

// Get tous les users 

app.get('/', async (req,res) => {
    
    try{
        const user = await User.find().exec()
        
        res.json(user)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

// Get un user par son id 

app.get('/:id', async (req,res) => {
    
    const {id} = req.params

    try {
        const oneUser =  await User.findById(id).exec()
        res.json(oneUser)
    } catch {
        res.status(500).json({ error: err })
    }
})

// Put pour modifier infos du user

app.put('/', verifyUser, async (req,res) => {

    try {
        const userUpdate =  await User.findOneAndUpdate(
            { _id: req.user },
            { ...req.body },
            { new : true}
        ).exec()

        console.log(userUpdate)
        res.json(userUpdate)

    } catch {
        res.status(500).json({ error: err })
    }
})

module.exports = app