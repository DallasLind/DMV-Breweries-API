const mongoose = require("mongoose");

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/dmv-breweries-api";
  }

mongoose.connect("mongodb://localhost/dmv-breweries-api", { useUnifiedTopology: true, useNewUrlParser: true });


module.exports = mongoose;