import express from 'express';
import { sequelizeConnection } from './databaseConnections/sequelizeDatabaseConnection';
const app = express();
export const router = express.Router();
const port = 5005;


async function Server(){
    try{
    await sequelizeConnection.authenticate();
    console.log("Connection has been established successfully");
}catch(error){
    console.log("Cannot connect to database", error);
}
}
Server();
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});