"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readLogFile = void 0;
const fs_1 = __importDefault(require("fs"));
const readLogFile = (logFilePath) => {
    console.log(logFilePath);
    if (!fs_1.default.existsSync(logFilePath)) {
        console.error("Log file not found!");
        return [];
    }
    return fs_1.default.readFileSync(logFilePath, "utf-8").split("\n").filter(Boolean);
};
exports.readLogFile = readLogFile;
