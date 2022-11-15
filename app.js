const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3300;

const mailRouter = require("./routes/MailRouter")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic route
app.get("/", (req, res) => {
    res.send(`Welcome to the server!`);
});

// Basic route
app.use("/api/mail", mailRouter );
    



app.listen(port, () => console.log(`Server started on port ${port}`));


