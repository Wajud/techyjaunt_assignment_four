const express = require("express");
const app = express();
const operationsRouter = require("./controllers/operations");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());

//routes
app.use("/api/calculate", operationsRouter);

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
