const db = require('../util/database');

module.exports = class Product {
    constructor(pNo, pName, manufacturer, unitprice, description) {
        this.pNo = pNo;
        this.pName = pName;
        this.manufacturer = manufacturer;
        this.unitprice = unitprice;
        this.description = description;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM product');
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM product');
    }
}