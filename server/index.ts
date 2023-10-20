import express, { Application } from 'express';
import { config } from 'dotenv';
config()

const app : Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try{
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    });
}catch(e){
    console.log(e);
}
