import express from "express";
import "dotenv/config";
import item_routes from "./src/routes/items.js";
import connectDb from "./src/config/connectDB.js";
import cors from "cors";

const app = express();
app.use(express.json());

//ENV variables
const PORT = process.env.PORT;

connectDb();

app.use(cors());

app.get("/", async (req, res) =>
  res.send({ message: "Hello! Welcome to EduCart Backend!" })
);

app.use("/items", item_routes);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
