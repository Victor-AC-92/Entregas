class ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        let productCodeTest = products.find(each => each.code === code)
        if(productCodeTest){
            return console.error("Introduzca otro número de código.")
        } else {let id = 1
        products.map(product => {
            if(product.id != null){
                id++
            }
        })
        
        let productPush = {id, title, description, price, thumbnail, code, stock}
        products.push(productPush)
        }
    }

    getProducts(){
        console.log(products);
    }

    getProductById(id){
        let productToFind = products.find(each => each.id === id)
        if (productToFind) {
            console.log(productToFind);
            return productToFind
        }
        console.log("Not found.");
        return null
    }

   
}

let products = []

let PM1 = new ProductManager()

PM1.addProduct("rice", "A package of rice", 200, "thumbnailURL", 001, 1);
PM1.addProduct("milk", "A carton of milk", 240, "thumbnailURL", 002, 1);
PM1.getProducts();
PM1.getProductById(2);