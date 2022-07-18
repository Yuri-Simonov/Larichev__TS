enum PaymentStatus {
	Holded,
	Reserved,
	Unholded,
}

class Payment {
	id: number;
	status: PaymentStatus = PaymentStatus.Holded;
	createdAt: Date = new Date();
	updatedAt: Date;

	constructor(id: number) {
		this.id = id;
	}

	getPaymentLifeTime(): number {
		return this.createdAt.getTime() - new Date().getTime();
	}

	unholdPayment(): void {
		if (this.status === PaymentStatus.Reserved) {
			throw new Error("Платеж уже прошел! Его нельзя отменить!");
		}
		this.status = PaymentStatus.Unholded;
		this.updatedAt = new Date();
	}
}

let payment = new Payment(1);
payment.unholdPayment();
let time = payment.getPaymentLifeTime();
console.log("time", time);
