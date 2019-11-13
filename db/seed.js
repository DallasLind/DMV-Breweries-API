const Brewery = require('../models/Breweries');
const fetch = require("node-fetch");

const urls = ["https://api.openbrewerydb.org/breweries?by_state=maryland", "https://api.openbrewerydb.org/breweries?by_state=district_of_columbia", "https://api.openbrewerydb.org/breweries?by_state=virginia"]

fetch(["https://api.openbrewerydb.org/breweries?by_state=maryland", "https://api.openbrewerydb.org/breweries?by_state=district_of_columbia", "https://api.openbrewerydb.org/breweries?by_state=virginia"], {
  headers: {
    Accept: 'application/json'
  }
})
  .then(res => res.json())
  .then(res => {
    Brewery.remove({}).then(() => {
      Brewery.create(res.results).then(Breweries => {
        console.log(Breweries);
        process.exit();
      });
    });
  })
  .catch(err => console.log('error', err))