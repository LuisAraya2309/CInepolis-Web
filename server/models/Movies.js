const { default: mongoose } = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:false,
    },
    director:{
        type:String,
        required:false,
    },
    actors:{
        type:String,
        required:false,
    },
    genders:{
        type:String,
        required:false,
    },
    languages:{
        type:Array,
        required:false,
    },
    year:{
        type:String,
        required:false,
    },
    length:{
        type:String,
        required:false,
    },
    requiredAge:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:false,
    }
});

const MoviesModel = mongoose.model("movies", MoviesSchema)
module.exports = MoviesModel