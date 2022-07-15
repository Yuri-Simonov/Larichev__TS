"use strict";
var StatusPayload;
(function (StatusPayload) {
    StatusPayload["Success"] = "success";
    StatusPayload["Failed"] = "failed";
})(StatusPayload || (StatusPayload = {}));
function isSuccess(res) {
    return res.status === StatusPayload.Success;
}
function someFunc(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
