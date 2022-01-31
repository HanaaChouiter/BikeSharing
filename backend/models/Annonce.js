const { Schema, model } = require("mongoose")

const annonceSchema = new Schema ({
    name: {
        type: String,
        required : true
    },
    description: {
        type: String,
    },
    status: {
        type: Boolean,
        Default: true
    },
    price: {
        type: Number,
        required : true
    },
    picture: {
        type: String
    },
    locations: [{
        type: Schema.Types.ObjectId, ref: "Location"
    }],
    coments: [{
        type: Schema.Types.ObjectId, ref: "Coment"
    }],
    user: {
        type: Schema.Types.ObjectId, ref: "User"
    },
},{
    timestamps: true
})

const Annonce = model("Annonce",annonceSchema)

module.exports = Annonce



