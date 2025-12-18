export class Product {
    private _productTitle!: String;
    public get productTitle(): String {
        return this._productTitle;
    }
    public set productTitle(value: String) {
        this._productTitle = value;
    }
    private _productPrice!: String;
    public get prouctPrice(): String {
        return this._productPrice;
    }
    public set productPrice(value: String) {
        this._productPrice = value;
    }

    private _productImage: String ="";
    public get productImage(): String {
        return this._productImage;
    }
    public set productImage(value: String) {
        this._productImage = value;
    }

    private _category: String = "";
    public get category(): String {
        return this._category;
    }
    public set category(value: String) {
        this._category = value;
    }

    constructor(readonly productID: String){

    }

    
    public printProduct(): String{
        return "productID:" +this.productID +", productTitle: "+this.productTitle + ", productPrice: " + this.prouctPrice
    }
}

let product = new Product("001")
product.productTitle = "Samsung ultra 25"
product.productPrice = "15000 DH"
console.log(product.printProduct())