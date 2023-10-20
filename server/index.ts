import express, { Request, Response } from 'express';
import { config } from 'dotenv';
config()

const app = express();
const port = process.env.PORT || 5000;

app.use('/', (req,res) => res.json({"hello":"world"}) )


app.listen(port, () => {
    console.log(`listening on port ${port}`)
});