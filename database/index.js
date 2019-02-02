const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient:true});


//**this connects our database  */
var db = mongoose.connection;
db.on('error', (err) => console.log('connection error', err));
db.once('open', () => console.log('connected.'));
//logs our connection

//schemas are skeleton data
let repoSchema = new mongoose.Schema({
  login: String,
  name: String,//name of specific repo
  url: String,
  stars: Number, // will try to sort by popularity later
});

//model the schema
let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  var someRepo = new Repo({
    login: data.login,
    name: data.name,
    url: data.url,
    stars: data.stars
  })
  if (err) return console.error(err);
  // This function should save a repo or repos to the MongoDB
}

module.exports.save = save;