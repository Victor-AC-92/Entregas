const { log } = require('console');
const fs = require('fs');
const path = require('path');


class ProductManager{
    #products = [];
    #filePath = './Entregas/Clase_4/data/data.json'
    
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        fs.readFile(this.#filePath, 'utf-8', (error, content) => {
            if(error){
                console.log('addProduct: error');
                console.log(error);
            } else {
                let productList = JSON.parse(content)
                let productCodeTest = productList.find(each => each.code === code)
                    if(productCodeTest){
                    return "Introduzca otro número de código."
                } else {
                    let id = 1
                    this.#products.map(product => {
                        if(product.id != null){
                            id++
                        }
                    })
        
                    let productPush = {id, title, description, price, thumbnail, code, stock}
                    this.#products.push(productPush)
                    fs.promises.writeFile(this.#filePath, JSON.stringify(this.#products, ',', 2))
                    .then(() => {return id})
                    .catch( error => console.log(error))
                }
            }
        })
    }

    getProducts(){
        fs.readFile(this.#filePath, 'utf-8', (error, content) => {
            if (error) {
                console.log('getProducts: error');
                return error
            } else {
                let productList = JSON.parse(content)
                if(productList.length = 0){
                    return 'Not found'
                } else {
                    return productList
                }
            }
        })
    }

    getProductById(id){
        fs.readFile(this.#filePath, 'utf-8', (error, content) => {
            if (error) {
                console.log('getProducts: error');
            } else {
                let productList = JSON.parse(content)
                let productSearched = productList.find(product => product.id === id)
                return productSearched
            }
        })
    }

    updateProduct(pId, data){
        fs.readFile(this.#filePath,'utf-8', (error, content) => {
            if (error){
                console.log('updateProducts: error');
            } else {
                let productList = JSON.parse(content)
                let productSearched = productList.find(({id}) => id == pId)
                let updatedProduct = {...productSearched, ...data}
                productList.splice(productList.indexOf(productSearched), 1)
                productList.push(updatedProduct)
                fs.promises.writeFile(this.#filePath, JSON.stringify(productos, ',', 2))
                    .then(() => console.log('updateProduct: done'))
                    .catch( error => error, console.log('updateProduct: error'))
            }
        })
    }

    deleteProduct(pId){
        fs.readFile(this.#filePath, 'utf-8', (error, content) => {
            if (error) {
                console.log('deleteProduct: error');
            } else {
                let productList = JSON.parse(content)
                let deletedProduct = productList.find(({id}) => id == pId)
                if(deletedProduct = undefined){
                    return 'Not found'
                } else {
                productList.splice(productList.indexOf(deletedProduct));
                fs.promises.writeFile(this.#filePath, JSON.stringify(productos, ',', 2))
                    .then(() => console.log('deleteProduct: done'))
                    .catch( error => error, console.log('updateProduct: error'))
                }     
            }
        })
    }
   
}



let PM1 = new ProductManager()

/* PM1.addProduct("rice", "A package of rice", 200, "thumbnailURL", 001, 25);
PM1.addProduct("milk", "A carton of milk", 240, "thumbnailURL", 002, 15);
PM1.addProduct("tea", "A box of tea bags", 120, "thumbnailURL", 003, 10);
PM1.addProduct("eggs", "A dozen eggs", 500, "thumbnailURL", 004, 30); */
PM1.getProducts()
PM1.getProductById(2)