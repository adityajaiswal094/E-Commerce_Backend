const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ProductData = require('./productData.json');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    try {
        res.send(ProductData);
    } catch (error) {
        console.error(error);
    }
});

app.get("/singleproduct/:id", (req, res) => {
    try {
        const {id} = req.params;

        res.send(ProductData.find((product) => product.id == id));
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, hostname, () => console.log(`Listening on port ${port}`));