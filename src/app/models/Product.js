"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(productID) {
        this.productID = productID;
        this._productImage = "";
        this._category = "";
    }
    Object.defineProperty(Product.prototype, "productTitle", {
        get: function () {
            return this._productTitle;
        },
        set: function (value) {
            this._productTitle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "prouctPrice", {
        get: function () {
            return this._productPrice;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productPrice", {
        set: function (value) {
            this._productPrice = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "productImage", {
        get: function () {
            return this._productImage;
        },
        set: function (value) {
            this._productImage = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: false,
        configurable: true
    });
    Product.prototype.printProduct = function () {
        return "productID:" + this.productID + ", productTitle: " + this.productTitle + ", productPrice: " + this.prouctPrice;
    };
    return Product;
}());
exports.Product = Product;
var product = new Product("001");
product.productTitle = "Samsung ultra 25";
product.productPrice = "15000 DH";
console.log(product.printProduct());
