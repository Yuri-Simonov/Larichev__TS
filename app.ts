type PaymentStatus = "new" | "paid" | "new paid";

class Payment {
	id: number;
	status: PaymentStatus = "new";

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = "paid";
	}
}

class PersistedPayment extends Payment {
	dataBaseId: number;
	paidAt: Date;

	constructor() {
		const id = Math.random();
		super(id);
	}

	save() {
		// Что-то сохраняет
	}

	override pay(date?: Date): void {
		// super.pay(); вариант
		this.status = "new paid";
		if (date) {
			this.paidAt = new Date();
		}
	}
}
