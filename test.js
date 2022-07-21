"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addToCart(product) {
        this.products.push(product);
    }
    deleteProductFromCart(productId) {
        this.products = this.products.filter((p) => {
            return p.id !== productId;
        });
    }
    countToTotalPrice() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length === 0) {
            throw new Error("Нет ни одного товара в корзине");
        }
        if (!this.delivery) {
            throw new Error("Не указан способ доставки");
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addToCart(new Product(1, "печеньки", 60));
cart.addToCart(new Product(2, "хлеб", 80));
cart.addToCart(new Product(3, "молоко", 100));
cart.deleteProductFromCart(2);
cart.setDelivery(new HomeDelivery(new Date(), "some adress"));
console.log(cart.countToTotalPrice());
console.log(cart.checkOut());
