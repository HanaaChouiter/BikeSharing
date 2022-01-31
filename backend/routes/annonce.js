const express = require("express")
const app = express()
const Annonce = require("../models/Annonce")


app.get('/', async (req,res) => {
    
    try{
        const annonces = await Annonce.find().exec()
        
        res.json(annonces).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = app