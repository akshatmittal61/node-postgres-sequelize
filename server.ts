import express from "express";
import cors from "cors";
import { PORT } from "./config";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.info(`Server running on port ${PORT}`);
});
