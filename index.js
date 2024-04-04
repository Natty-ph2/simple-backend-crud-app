const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))


//routes
app.use("/api/products", productRoute);





app.get('/', (req, res) => {
    res.send("hello from Node API server Updated")
});



//update
//delete 



mongoose.connect("mongodb+srv://natnaeldestaer2:xL9C3r1KH3zrnW0e@cruddb.jc79uwn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CrudDB")
.then(() => {
    console.log("Connected to DB!");
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection Failed!");
})