class ProductManager{
    #products = [];
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        
    }

    addProduct(title, description, price, thumbnail, code, stock){
        let productCodeTest = this.#products.find(each => each.code === code)
        if(productCodeTest){
            return console.error("Introduzca otro número de código.")
        } else {let id = 1
        this.#products.map(product => {
            if(product.id != null){
                id++
            }
        })
        
        let productPush = {id, title, description, price, thumbnail, code, stock}
        this.#products.push(productPush)
        }
    }

    getProducts(){
        return this.#products;
    }

    getProductById(id){
        let productToFind = this.#products.find(each => each.id === id)
        if (productToFind) {
            console.log(productToFind);
            return productToFind
        }
        console.log("Not found.");
        return null
    }

   
}



let PM1 = new ProductManager()

PM1.addProduct("rice", "A package of rice", 200, "thumbnailURL", 001, 25);
PM1.addProduct("milk", "A carton of milk", 240, "thumbnailURL", 002, 15);
PM1.addProduct("tea", "A box of tea bags", 120, "thumbnailURL", 003, 10);
PM1.addProduct("eggs", "A dozen eggs", 500, "thumbnailURL", 004, 30);
PM1.getProducts();
PM1.getProductById(2);