const mongoose = require("mongoose");

//Gotta figure out connect
mongoose.connect('mongodb://localhost/', { useNewUrlParser: true })


module.exports = mongoose;