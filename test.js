"use strict";
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class RealLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const myLogger = new RealLogger();
myLogger.logWithDate("Текущее сообщение!");
