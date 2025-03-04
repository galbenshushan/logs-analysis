"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalyzedReport = void 0;
const analysisLogsService_1 = require("../services/analysisLogsService");
const path_1 = __importDefault(require("path"));
const logFilePath = path_1.default.join(__dirname, "../log.txt");
console.log(logFilePath);
const getAnalyzedReport = (req, res) => {
    const report = (0, analysisLogsService_1.analyzeLogs)(logFilePath);
    res.json(report);
};
exports.getAnalyzedReport = getAnalyzedReport;
