"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeLogs = void 0;
const logParsers_1 = require("../utils/logParsers");
const filesService_1 = require("./filesService");
const general_1 = require("../enums/general");
const analyzeLogs = (logFilePath) => {
    try {
        const logs = (0, filesService_1.readLogFile)(logFilePath);
        const requestsPerHour = {};
        const resourceCount = {};
        const responseCodes = {};
        const anomalies = [];
        logs.forEach((line) => {
            const logEntry = (0, logParsers_1.parseLogLine)(line);
            if (!logEntry)
                return;
            const hour = logEntry.dateTime.slice(0, 13);
            requestsPerHour[hour] = (requestsPerHour[hour] || 0) + 1;
            resourceCount[logEntry.resource] =
                (resourceCount[logEntry.resource] || 0) + 1;
            responseCodes[logEntry.responseCode] =
                (responseCodes[logEntry.responseCode] || 0) + 1;
        });
        for (const [hour, count] of Object.entries(requestsPerHour)) {
            if (count > general_1.TrafficThreshold.High) {
                anomalies.push(`High traffic detected at ${hour}: ${count} requests`);
            }
        }
        return { requestsPerHour, resourceCount, responseCodes, anomalies };
    }
    catch (error) {
        console.error("Error analyzing logs:", error);
        return {
            requestsPerHour: {},
            resourceCount: {},
            responseCodes: {},
            anomalies: [],
        };
    }
};
exports.analyzeLogs = analyzeLogs;
