const { default: mongoose } = require("mongoose");

const SessionsSchema = new mongoose.Schema({
    
    room:{
        type:String,
        required:false,
    },
    movie:{
        type:String,
        required:false,
    },
    date:{
        type:String,
        required:false,
    },
    hour:{
        type:String,
        required:false,
    },
    seats:{
        type:Array,
        required:false,
    },
    movieImage:{
        type:String,
        required:false,
    }
});

const SessionsModel = mongoose.model("sessions", SessionsSchema)
module.exports = SessionsModel