const { default: mongoose } = require("mongoose");

const SnackSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
});

const SnackModel = mongoose.model("snacks",SnackSchema)
module.exports = SnackModel