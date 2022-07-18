"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Reserved"] = 1] = "Reserved";
    PaymentStatus[PaymentStatus["Unholded"] = 2] = "Unholded";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return this.createdAt.getTime() - new Date().getTime();
    }
    unholdPayment() {
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
