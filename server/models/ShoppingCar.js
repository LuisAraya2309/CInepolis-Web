const { default: mongoose } = require("mongoose");

const ShoppingCarSchema = new mongoose.Schema({
    clientEmail:{
        type:String,
        required:false,
    },
    boughtTickets:{
        type:Object,
        required:false,
    },
    snacks:{
        type:Object,
        required:false,
    }

});

const ShoppingCarModel = mongoose.model("ShoppingCar",ShoppingCarSchema)
module.exports = ShoppingCarModel