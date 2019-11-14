const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dmv-breweries-api", { useUnifiedTopology: true, useNewUrlParser: true });

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/dmv-breweries-api";
  }

module.exports = mongoose;