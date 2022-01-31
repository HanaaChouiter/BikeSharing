const express = require("express")
const app = express()
const Annonce = require("../models/Annonce")
const User =  require("../models/User")


app.get('/', async (req,res) => {
    
    try{
        const annonces = await Annonce.find().exec()
        
        res.json(annonces).status(200)
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

app.post('/', async (req,res) => {
    
    try{
        const annonce = await new Annonce({
            ...req.body,
            user: req.user._id
        })
        
        annonce.save(async (annonce)=>{
            if ( annonce)
            req.user.annonce.push(annonce._id)
            req.user.save()

            res.json(annonce)
        })
        
    } catch (err) {
        res.status(500).json({ error: err })
    }
})



module.exports = app
