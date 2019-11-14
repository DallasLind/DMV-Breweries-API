const breweriesJSON = require("./breweries");
const Breweries = require("../models/Breweries");

const breweriesData = breweriesJSON.map(item => {
    const breweries = {}
    breweries.name = item.name
    breweries.breweryType = item.breweryType
    breweries.street = item.street
    breweries.city = item.city
    breweries.state = item.state
    breweries.postalCode = item.postalCode
    breweries.country = item.country
    breweries.longitude = item.longitude
    breweries.latitude = item.latitude
    breweries.phone = item.phone
    breweries.websiteUrl = item.websiteUrl
    return breweries
})

Breweries.deleteMany({})
    .then(() => {
        Breweries.create(breweriesData)
            .then(breweries => {
                console.log(breweries)
                process.exit();
            })
            .catch(err => {
                console.log(err)
                process.exit();
            })
    })