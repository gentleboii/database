const moment = require('moment');

const Product = require('../models/product');

    exports.getProduct = (req, res, next) => {
        Product.fetchAll()
            .then(([rows]) => {
                for (let p of rows) {
                    p.date = moment(p.date).format('MMM D, YYYY');
                }
                 console.log(JSON.stringify(rows, ["pNo", "pName", "Manufacturer","unirprice","description"]));
                //res.send(JSON.stringify(rows));
                res.render('product', {
                    data: rows,
                    title: 'Post List',
                });
            })
            .catch(err => console.log(err));
    };
