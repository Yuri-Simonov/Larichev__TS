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

type Res = IResponseSuccess | IResponseFailed;
type func = (res: Res) => number;

function isSuccess(res: Res): res is IResponseSuccess {
	return (res as IResponseSuccess).status === StatusPayload.Success;
}

function someFunc(res: Res): number {
	if (isSuccess(res)) {
		return res.data.databaseId;
	} else {
		throw new Error(res.data.errorMessage);
	}
}
