import express, { Request, Response } from "express";
import dotenv from "dotenv";
import truecostRoutes from "./routes/truecost.routes";
import cors from "cors";

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

app.get("/", (_: Request, res: Response) => {
  res.json({ cool: "Toit" });
});

app.use("/partner/truecost", truecostRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
