import express from "express";
import appRoutes from "./routes/rotas.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(cors());

app.use("/", appRoutes);

app.listen(443);