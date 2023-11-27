import express, { application } from 'express';

const app = express();
const port = 4000

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