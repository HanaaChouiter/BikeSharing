const { Schema, model } = require("mongoose")
const userSchema = new Schema ({

    firstName: {
        type: String,
        required : true
    },
    lastName: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required : true
    },
    adress: {
        type: String
    },
    phoneNumber: {
        type: Number,
        required : true
    },
    status: {
        type: String
    },
    annonce: [{
        type: Schema.Types.ObjectId,
        ref: "Annonce"
    }],
    conversation: [{
        type: Schema.Types.ObjectId,
        ref: "Conversation"
    }],
    coment: [{
        type: Schema.Types.ObjectId,
        ref: "Coment"
    }],
    paiement: [{
        type: Schema.Types.ObjectId,
        ref: "Paiement"
    }]
},{
    timestamps: true
})

const User = model("User",userSchema)

module.exports = User



