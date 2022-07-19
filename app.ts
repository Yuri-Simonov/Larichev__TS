interface ILogger {
	log(...args: any[]): void;
	error(...args: any[]): void;
}

class Logger implements ILogger {
	log(...args: any[]): void {
		console.log(...args);
	}
	error(...args: any[]): void {
		console.log(...args);
	}
}

interface IPayable {
	pay(paymentId: number): void;
	price?: number;
}

interface IDeletable {
	delete(): void;
}

class Payment implements IPayable, IDeletable {
	pay(paymentId: number): void {
		console.log(paymentId);
	}
	delete(): void {
		throw new Error("Method not implemented.");
	}
}
