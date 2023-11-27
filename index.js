import express from 'express';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 4000


const DBHOST = process.env.DBHOST;
const DBNAME = process.env.DBNAME;
const DBUSER = process.env.DBUSER;
const DBPASSWORD = process.env.DBPASSWORD;
const DBPORT = process.env.DBPORT;

console.log(`Dette er min host: ${process.env.DBHOST}`);
console.log(`Dette er Databasens navn: ${process.env.DBNAME}`);
console.log(`Dette er min user: ${process.env.DBUSER}`);
console.log(`Dette er mit password: ${process.env.DBPASSWORD}`);
console.log(`Dette er min database port: ${process.env.DBPORT}`);



//Router
app.get('/', (req, res) => {
    res.send('Velkommen til min hjemmeside')
})

// 404
app.get('*', (req, res) => {
    res.send('Siden du leder efter kan ikke findes')
})


app.listen(port, () => 
    console.log`server køre på ${port}`
);