# DMV-Breweries-API

### Description
This API is one that I created to sort and display the breweries and brewpubs in the DC-Maryland-Virginia area. The API utilizes data from [Open Brewery DB](https://www.openbrewerydb.org/) in a JSON file, a model built with Mongoose, Mongoose queries with RESTful paths, and a Node.js seed file. This is a starter project to get more comfortable with using backend tools and creating an API. 

### Example 
Check out an example of the JSON data! (Also District Chophouse is absolutely delicious and I recommend them!)
```
{
        "name": "District ChopHouse and Brewery",
        "breweryType": "brewpub",
        "street": "509 7th St NW",
        "city": "Washington",
        "state": "District of Columbia",
        "postalCode": "20004-1600",
        "country": "United States",
        "longitude": "-77.0216694",
        "latitude": "38.8965132",
        "phone": "2023473434",
        "websiteUrl": "http://www.districtchophouse.com"
    }
````

### Routes
Query | Path | Description | Additional Information |
------------ | ------------- | ------------- | ------------- |
POST | `/breweries/` | Create New Object |    |
GET | `/breweries/` | Find All Objects |    |
GET | `/breweries/name/:name` | Find by Name |   |
GET | `/breweries/breweryType:/breweryType` | Find by establishment type |    |
GET | `/breweries/street/:street` | Find by Street |    |
GET | `/breweries/city/:city` | Find by City |    |
GET | `/breweries/state/:state` | Find by State | Only includes District of Columbia, Maryland, and Virginia 
GET | `/breweries/postalCode/:postalCode` | Find by Zip Code |    |
GET | `/breweries/country/:country` | Find by Country | Only United States |
GET | `/breweries/longitude/:longitude` | Find by longitude |    |
GET | `/breweries/latitude/:latitude` | Find by latitude |     |
GET | `/breweries/phone/:phone` | Find by phone number |     |
GET | `/breweries/websiteUrl/:websiteUrl` | Find by Website URL |     |
GET | `/breweries/{name}/edit` | Find an object by name and edit it |    |
DELETE | `/breweries/{name}` | Find object by name and delete |      |

### Technologies Used
* Mongoose
* MongoDB
* Node.js
* Postman

### Future Plans 
* Expand on the data where possible and keep it up to date
* Deploy to Heroku 
* Create an accompanying front-end in React to make the data even more accessible
* Improve on this documentation
