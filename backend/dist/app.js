"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logsReportController_1 = require("./controllers/logsReportController");
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/report", logsReportController_1.getAnalyzedReport);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
