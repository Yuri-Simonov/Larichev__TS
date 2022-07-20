"use strict";
class Payment {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Что-то сохраняет
    }
    pay(date) {
        // super.pay(); вариант
        this.status = "new paid";
        if (date) {
            this.paidAt = new Date();
        }
    }
}
