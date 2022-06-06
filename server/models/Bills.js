const { default: mongoose } = require("mongoose");

const BillSchema = new mongoose.Schema({
    clientEmail:{
        type:String,
        required:false,
    },
    productList:{
        type:Array,
        required:false,
    },
    totalPrice:{
        type:Number,
        required:false,
    },
    date:{
        type:String,
        required:false,
    }

});

const BillModel = mongoose.model("bills",BillSchema)
module.exports = BillModel