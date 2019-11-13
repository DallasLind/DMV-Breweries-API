const express = require("express");
const app = express();
const mongoose = require("mongoose")
const parser = require("body-parser");
const Breweries = require("./models/breweries");
const http = require('http');

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());


app.post("/breweries", function (req, res){
    Breweries.create(req.body).then(breweries => {
        res.json(breweries);
    })
})

app.get("/", function (req, res) {
    Breweries.find({}).then(breweries => {
        res.json(breweries);
    })
})

app.get("/breweries/name/:name", function(req, res) {
    Breweries.find({ brand: req.params.brand }).then(breweries => {
    res.json(breweries);
    });
});

app.get("/breweries/breweryType/:breweryType", function(req, res) {
    Breweries.find({ product: req.params.product }).then(breweries => {
    res.json(breweries);
    });
});

app.get("/breweries/street/:street", function(req, res) {
    Breweries.find({ hex: req.params.hex }).then(breweries => {
    res.json(breweries);
    });
});

app.get("/breweries/city/:city", function(req, res) {
    Breweries.find({ group: req.params.group }).then(breweries => {
    res.json(breweries);
    });
});

app.get("/breweries/state/:state", function(req, res) {
  Breweries.find({ group: req.params.group }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/breweries/postalCode/:postalCode", function(req, res) {
  Breweries.find({ group: req.params.group }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/breweries/country/:country", function(req, res) {
  Breweries.find({ group: req.params.group }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/breweries/longitude/:longitude", function(req, res) {
  Breweries.find({ group: req.params.group }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/breweries/latitude/:latitude", function(req, res) {
  Breweries.find({ group: req.params.group }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/breweries/phone/:phone", function(req, res) {
  Breweries.find({ group: req.params.group }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/breweries/websiteUrl/:websiteUrl", function(req, res) {
  Breweries.find({ group: req.params.group }).then(breweries => {
  res.json(breweries);
  });
});

app.get('/:name', (req, res) => {
  Breweries.find({ name: req.params.name }).then(result => {
    res.json(result);
  });
});

app.delete("/breweries/:id", function(req, res) {
    Breweries.findOneAndDelete({_id: req.body.id}).then(breweries => {
        res.json(breweries);
    })
})

app.listen(4000, () =>
    console.log("Yay breweries!!")
)