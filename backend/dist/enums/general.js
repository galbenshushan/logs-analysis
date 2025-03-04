"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogParts = exports.TrafficThreshold = void 0;
var TrafficThreshold;
(function (TrafficThreshold) {
    TrafficThreshold[TrafficThreshold["Low"] = 10] = "Low";
    TrafficThreshold[TrafficThreshold["Medium"] = 50] = "Medium";
    TrafficThreshold[TrafficThreshold["High"] = 100] = "High";
    TrafficThreshold[TrafficThreshold["Critical"] = 200] = "Critical";
})(TrafficThreshold || (exports.TrafficThreshold = TrafficThreshold = {}));
var LogParts;
(function (LogParts) {
    LogParts[LogParts["DateTime"] = 0] = "DateTime";
    LogParts[LogParts["RequestType"] = 1] = "RequestType";
    LogParts[LogParts["Resource"] = 2] = "Resource";
    LogParts[LogParts["ResponseCode"] = 3] = "ResponseCode";
    LogParts[LogParts["ResponseSize"] = 4] = "ResponseSize";
    LogParts[LogParts["ReferrerUrl"] = 5] = "ReferrerUrl";
    LogParts[LogParts["UserAgent"] = 6] = "UserAgent";
})(LogParts || (exports.LogParts = LogParts = {}));
