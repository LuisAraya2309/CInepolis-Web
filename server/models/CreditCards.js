const { default: mongoose } = require("mongoose");

const CreditCardSchema = new mongoose.Schema({
    clientId:{
        type:Number,
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
        type:String,
        required:false,
    }

});

const CreditCardModel = mongoose.model("creditCards",CreditCardSchema)
module.exports = CreditCardModel