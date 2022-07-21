class Product {
	constructor(public id: number, public name: string, public price: number) {}
}
class Delivery {
	constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
	constructor(date: Date, public address: string) {
		super(date);
	}
}
class ShopDelivery extends Delivery {
	constructor(public shopId: number) {
		super(new Date());
	}
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
	private products: Array<Product> = [];
	private delivery: DeliveryOptions;

	public addToCart(product: Product): void {
		this.products.push(product);
	}
	public deleteProductFromCart(productId: number): void {
		this.products = this.products.filter((p: Product) => {
			return p.id !== productId;
		});
	}
	public countToTotalPrice(): number {
		return this.products
			.map((p: Product) => p.price)
			.reduce((p1: number, p2: number) => p1 + p2);
	}

	public setDelivery(delivery: DeliveryOptions): void {
		this.delivery = delivery;
	}

	public checkOut() {
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
