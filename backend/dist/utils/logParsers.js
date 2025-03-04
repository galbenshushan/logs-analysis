"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLogLine = void 0;
const general_1 = require("../enums/general");
const serializations_1 = require("./serializations");
const parseLogLine = (log) => {
    const parts = log.split(' "');
    const dateTime = (0, serializations_1.removeSurroundingQuotes)(parts[general_1.LogParts.DateTime]);
    const requestType = (0, serializations_1.removeSurroundingQuotes)(parts[general_1.LogParts.RequestType]);
    const resource = (0, serializations_1.removeSurroundingQuotes)(parts[general_1.LogParts.Resource]);
    const responseCode = parseInt((0, serializations_1.removeSurroundingQuotes)(parts[general_1.LogParts.ResponseCode]), 10);
    const responseSize = (0, serializations_1.removeSurroundingQuotes)(parts[general_1.LogParts.ResponseSize]);
    const referrerUrl = (0, serializations_1.removeSurroundingQuotes)(parts[general_1.LogParts.ReferrerUrl]);
    const userAgent = (0, serializations_1.removeSurroundingQuotes)(parts[general_1.LogParts.UserAgent].slice(0, -1));
    return {
        dateTime,
        requestType,
        resource,
        responseCode,
        responseSize,
        referrerUrl,
        userAgent,
    };
};
exports.parseLogLine = parseLogLine;
