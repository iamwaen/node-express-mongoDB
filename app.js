const express = require('express')
const {connectMongo,Cat} = require('./mongo')
const app = express()
app.use(express.json());
const port = 3000

app.post("/cats", async(req, res) => {
    console.log("Posted!" + req.body.name);
    const newCats = new Cat({name: req.body.name, age: req.body.age});
    newCats.save().then(() => res.send('Posted!!!!'))
});

app.get('/cats', async(req, res) => {
    let results = await Cat.find({}).exec();
    console.log(results);  
    res.send('Hello World!')
});

connectMongo().then(
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}))