const mongoose = require('../db/connection');
const Schema = mongoose.Schema

const brewerySchema = new mongoose.Schema({
  "name": String,
  "breweryType": String,
  "street": String,
  "city": String,
  "state": {
      type: String,
      enum: ['Virginia', 'Maryland', 'District of Columbia']
  },
  "postalCode": String,
  "country": String,
  "longitude": Number,
  "latitude": Number,
  "phone": Number,
  "websiteUrl": String
});

const breweries = mongoose.model("breweries", brewerySchema);
module.exports = breweries;