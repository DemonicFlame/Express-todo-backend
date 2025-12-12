import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/api", todoRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
