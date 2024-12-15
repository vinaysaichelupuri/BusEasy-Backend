import express from 'express';
import { sequelizeConnection } from './databaseConnections/sequelizeDatabaseConnection';

import userRegister from './routes/userRegister';
export const router = express.Router();
const port = 5005;
const app = express()
app.use(express.json());
const cors = require('cors');
app.use(cors());


async function Server(){
    try{
    await sequelizeConnection.authenticate();
    console.log("Connection has been established successfully");
}catch(error){
    console.log("Cannot connect to database", error);
}
}
Server();
app.use('/api',userRegister);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});