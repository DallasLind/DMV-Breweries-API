const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dmv-breweries-api", { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;