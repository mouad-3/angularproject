import { Product } from "./Product";
import { ShoppingCartItem } from "./ShoppingCartItem";

class ShoppingCart {
    itemsProduct: Array<ShoppingCartItem>;
    total: number;

    constructor(){
        this.itemsProduct = new Array()
        this.total = 0
    }

    public addItem(shoppingCartItem: ShoppingCartItem){
        let elem : ShoppingCartItem | undefined = this.itemsProduct.find(
x => x.itemProduct.productID == shoppingCartItem.itemProduct.productID)
        if(elem == undefined){
            this.itemsProduct.push(shoppingCartItem)
        } else {
            elem.addProduct(shoppingCartItem)
        }
    }
    public removeItem(shoppingCartItem: ShoppingCartItem){
let elem : ShoppingCartItem | undefined = this.itemsProduct.find(x => x.itemProduct.productID == shoppingCartItem.itemProduct.productID)
if(elem != undefined){
    elem.subtractProduct(shoppingCartItem)
    if(elem.quantity == 0){
  this.itemsProduct.splice(this.itemsProduct.indexOf(shoppingCartItem), 1)
            }
        }
    }

     

public getItems(){
 for(var i in this.itemsProduct){ 
    console.log(this.itemsProduct[i].displayProduct() +"\n"); 
        }
    }
}


let productOne = new Product("001")
productOne.productTitle = "Samsung ultra 25"
productOne.productPrice = "150000 DH"

let productTwo = new Product("002")
productTwo.productTitle = "IPHONE 15 "
productTwo.productPrice = "13000 DH"

let productThree= new Product("003")
productThree.productTitle = "TV 70 Pouce"
productThree.productPrice = "8000 DH"

let productFour= new Product("004")
productFour.productTitle = "TV 50 Pouce"
productFour.productPrice = "6000 DH"

let productFive = new Product("005")
productFive.productTitle = "IPHONE 14 PRO"
productFive.productPrice = "13000 DH"

let shoppingCartItemOne = new ShoppingCartItem(productOne)
let shoppingCartItemTwo = new ShoppingCartItem(productTwo)
let shoppingCartItemThree = new ShoppingCartItem(productThree)
let shoppingCartItemFour = new ShoppingCartItem(productFour)
let shoppingCartItemFive = new ShoppingCartItem(productFive)


let shoppingCart = new ShoppingCart()


shoppingCart.addItem(shoppingCartItemOne)
shoppingCart.addItem(shoppingCartItemTwo)
shoppingCart.addItem(shoppingCartItemThree)
shoppingCart.addItem(shoppingCartItemFour)
shoppingCart.addItem(shoppingCartItemFive)


console.log(shoppingCart.getItems())

shoppingCart.removeItem(shoppingCartItemFive)
shoppingCart.removeItem(shoppingCartItemThree)
shoppingCart.removeItem(shoppingCartItemFive)
shoppingCart.removeItem(shoppingCartItemFour)
shoppingCart.removeItem(shoppingCartItemFour)


console.log(".....After supression......")

console.log(shoppingCart.getItems())

