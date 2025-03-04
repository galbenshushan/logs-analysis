import express from "express";
import { getAnalyzedReport } from "./controllers/logsReportController";

const app = express();
const PORT = 3000;

app.get("/report", getAnalyzedReport);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
