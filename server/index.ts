import express, { Application } from 'express';
import {config} from 'dotenv';
import router from './routes/router';
import sequelize from './db/postgres';
import errorHandling from './middlewares/errorMiddleware'
import {json, urlencoded} from 'body-parser';
const cors = require('cors')
import {resolve} from 'path';
import fileUpload from 'express-fileupload';
config()

const app : Application = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.static(resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use(json());
app.use(
  urlencoded({
    extended: true,
  }),
);
app.use('/api', router)
app.use(errorHandling)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`Server started on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

// const fs = require("fs");
// import Tag from "./models/Tag";
// const readFile = fs.readFileSync('./mocks/tags.json', 'utf8');
// const arr : any[] = JSON.parse(readFile.toString());
// for (let i = 0; i < arr.length; i++) {
//     try{
//       const tag = Tag.create({name : arr[i].name});
    
//     }catch(e){
//       continue
//     }
// }

start()
