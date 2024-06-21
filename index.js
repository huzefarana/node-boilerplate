const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//uncomment the following line to connect to the database, make sure to have the .env file with the correct values
// const { connect } = require("./config/Database");
// connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//routes
const authRouter = require("./routes/authRoutes");

//routes usage
app.use("/api/auth", authRouter);

//server connection
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
