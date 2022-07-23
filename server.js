const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.static("public"));

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "books_db",
    },
    console.log("connected to the db.")
);

app.get("/books", (req, res) => {
    db.query("SELECT * FROM favorite_books", (err, results) => {
        console.log(results);
        res.json(results);
    });

});



app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});