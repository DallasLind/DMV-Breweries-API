const express = require("express");
const app = express();
const mongoose = require("mongoose")
const parser = require("body-parser");
const Breweries = require("./models.js");

mongoose.set('useFindAndModify', false);
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());


app.post("", function (req, res) {
    Breweries.create(req.body).then(breweries => {
        res.json(breweries);
    })
})

app.get("/", function (req, res) {
  Breweries.find({}).then(breweries => {
    res.json(breweries);
  })
})

app.get("/name/:name", function(req, res) {
    Breweries.find({ name: req.params.name}).then(breweries => {
    res.json(breweries);
    });
});

app.get("/breweryType/:breweryType", function(req, res) {
    Breweries.find({ breweryType: req.params.breweryType }).then(breweries => {
    res.json(breweries);
    });
});

app.get("/street/:street", function(req, res) {
    Breweries.find({ street: req.params.street }).then(breweries => {
    res.json(breweries);
    });
});

app.get("/city/:city", function(req, res) {
    Breweries.find({ city: req.params.city }).then(breweries => {
    res.json(breweries);
    });
});

app.get("/state/:state", function(req, res) {
  Breweries.find({ state: req.params.state }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/postalCode/:postalCode", function(req, res) {
  Breweries.find({ postalCode: req.params.postalCode }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/country/:country", function(req, res) {
  Breweries.find({ country: req.params.country }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/longitude/:longitude", function(req, res) {
  Breweries.find({ longitude: req.params.longitude }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/latitude/:latitude", function(req, res) {
  Breweries.find({ latitude: req.params.latitude }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/phone/:phone", function(req, res) {
  Breweries.find({ phone: req.params.phone }).then(breweries => {
  res.json(breweries);
  });
});

app.get("/websiteUrl/:websiteUrl", function(req, res) {
  Breweries.find({ websiteUrl: req.params.websiteUrl }).then(breweries => {
  res.json(breweries);
  });
});

app.get('/:name', (req, res) => {
  Breweries.find({ name: req.params.name }).then(breweries => {
    res.json(breweries);
  });
});

app.get("/:name/edit", function(req, res) {
  Breweries.findOneAndUpdate(
      {name: req.params.name},
      { $set: {breweryType: req.body.breweryType}},
      {new: true}
  ).then(breweries => {
      res.json(breweries);
  });
});

app.delete("/:name", function(req, res) {
    Breweries.findOneAndDelete({ name: req.body.name }).then(breweries => {
        res.json(breweries);
    })
})

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});