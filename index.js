const app = require('express')();
const parser = require('body-parser');
const Breweries = require('./db/breweries');

app.use(parser.json());


app.get('/', (req, res) => {
  Breweries.find({}).then(BreweriesCollection => {
    res.json(BreweriesCollection);
  });
});

app.post('/', (req, res) => {
  Breweries.create(req.body).then(newBreweries => {
    res.json(newBreweries);
  });
});

app.put('/:id', (req, res) => {
  Breweries.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }).then(updatedBreweries => {
    res.json(updatedBreweries);
  });
});

app.delete('/:id', (req, res) => {
  Breweries.findOneAndDelete({ id: req.params.id }).then(deletedBreweries => {
    res.json(deletedBreweries);
  });
});

app.listen(4000, () => {
  console.log('Listening on port 4000...');
});