const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:false,
    },
    email:{
        type:String,
        required:false,
    },
    password:{
        type:String,
        required:false,
    },
    type:{
        type:String,
        required:false,
    },
    lastname1:{
        type:String,
        required:false,
    },
    lastname2:{
        type:String,
        required:false,
    }

});

const UserModel = mongoose.model("users",UserSchema)
module.exports = UserModel