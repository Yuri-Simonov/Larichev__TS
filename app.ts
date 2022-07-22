abstract class Controller {
	abstract handle(req: any): void;

	handleWithLogs() {
		console.log("start");
		this.handle("request");
		console.log("end");
	}
}

// let newController = new Controller(); - нельзя создать экземпляр абстрактного класса.

class UserController extends Controller {
	handle(req: any): void {
		console.log("somebody log");
	}
}

let newUserController = new UserController();
newUserController.handleWithLogs();
