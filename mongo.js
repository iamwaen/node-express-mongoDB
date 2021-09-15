const mongoose = require('mongoose');

const connectMongo =()=>{
    return mongoose.connect('mongodb://localhost:27017/test');
}

const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });

// kitty.save().then(() => console.log('meow'));

// let results = Cat.find({}).exec();
// results.then((results) => console.log(results));

module.exports = {connectMongo,Cat}