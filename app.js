const express = require("express");
const app = express();
app.use(express.json());

const userRouter = require("./router/userRouter");

// port
const PORT = 8000;

// dataBase connection
const dbConnection = require("./dbConnection");
dbConnection();

app.get("/", async (req, res) => {
  return res.send("Welcome To Node Application");
});

// use Routers
app.use("/api/user", userRouter);

app.listen(PORT, () =>
  console.log(`server running Port ${PORT}server running Port ${PORT}`)
);
