import mysql from "mysql2";
import{fecha1, r1, promedio} from "./wbsBD1.js";


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "HarmanN22025",
    database: "Harmann2"

});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database");
});

const bd1 = "SELECT * FROM bd1";
const inserbd1 = "INSERT INTO bd1 (DATE,inH2O,promedio) VALUES (?,?,?)";

connection.query(inserbd1, [fecha1, r1, promedio], (err, results) => {
    if (err) {
        console.error("Error inserting data into bd1:", err);
        return;
    }
    console.log("Data inserted into bd1 successfully:", results);
});
