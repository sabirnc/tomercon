const express = require("express")
const app = express()
const mongoose = require("mongoose")
const routes = require("./Routes/index")
const bodyParser = require("body-parser")
const path = require("path")


mongoose.connect('mongodb://127.0.0.1:27017/tomcon')
.then(() => {
    app.listen(4000, () => {
        console.log('server started on port 4000');
    });
})
.catch((err) => {
    console.log(err);
});

app.use(express.static(path.join(__dirname, 'views')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/" , routes)







