import express from "express";
import cors from "cors";
import PasienRoute from "./routes/PasienRoute.js"
import BabyRoute from "./routes/BabyRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(PasienRoute);
app.use(BabyRoute);

app.listen(5000, () => console.log("Server up and running..."));
