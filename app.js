"use strict";
class Controller {
    handleWithLogs() {
        console.log("start");
        this.handle("request");
        console.log("end");
    }
}
// let newController = new Controller(); - нельзя создать экземпляр абстрактного класса.
class UserController extends Controller {
    handle(req) {
        console.log("somebody log");
    }
}
let newUserController = new UserController();
newUserController.handleWithLogs();
