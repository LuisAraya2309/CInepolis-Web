const { default: mongoose } = require("mongoose");

const CreditCardSchema = new mongoose.Schema({
    clientEmail:{
        type:String,
        required:false,
    },
    name:{
        type:String,
        required:false,
    },
    number:{
        type:Number,
        required:false,
    },
    expiredDate:{
        type:String,
        required:false,
    },
    securityNumber:{
        type:Number,
        required:false,
    }

});

const CreditCardModel = mongoose.model("creditCards",CreditCardSchema)
module.exports = CreditCardModel