const mongoose = require("mongoose");

//Gotta figure out connect
mongoose.connect('mongodb://localhost/breweries', { useNewUrlParser: true })
.then(() => {
    console.log("Connected to the brewery db!")
})


module.exports = mongoose;