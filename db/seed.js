const Brewery = require('../models/Breweries');
const fetch = require("node-fetch");

const urls = ["https://api.openbrewerydb.org/breweries?by_state=maryland", "https://api.openbrewerydb.org/breweries?by_state=district_of_columbia", "https://api.openbrewerydb.org/breweries?by_state=virginia"]