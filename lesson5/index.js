const getrandomfruitsname = require("random-fruits-name");
const getAnimaleName = require("random-animal-name");
const movie = require("name-to-imdb");
console.log(getAnimaleName());
console.log(getrandomfruitsname());
 movie({name:"Money"}, function(err, res, inf) { 
    console.log(res); // "tt0121955"
    // inf contains info on where we matched that name - e.g. metadata, or on imdb
    // and the meta object with all the available data
    console.log(inf);
  })
