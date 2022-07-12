interface Payload {
	sum: number;
	from: number;
	to: number;
}

enum StatusPayload {
	Success = "success",
	Failed = "failed",
}

interface IPaymentReq extends Payload {}

interface IPaymentSuccess extends Payload {
	databaseId: number;
}

interface IPaymentFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: StatusPayload.Success;
	data: IPaymentSuccess;
}

interface IResponseFailed {
	status: StatusPayload.Failed;
	data: IPaymentFailed;
}
