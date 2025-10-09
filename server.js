const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use ("/api/contacts/", require("./routes/contactRoutes"));
app.use ("/api/users/", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})