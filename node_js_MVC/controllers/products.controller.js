const { products } = require("../models/products.model");


exports.getProducts = function (req, res) {

    const { name, price } = req.body;

    if (name == undefined || price == undefined) {
        res.json(products);
    }
    else {
        products.push(
            {
                name: `${name}`,
                price: Number(price)
            })
    }
    res.status(200).send(
        products
    );

}