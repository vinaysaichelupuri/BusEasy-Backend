import express from 'express';
import { sequelizeConnection } from './databaseConnections/sequelizeDatabaseConnection';
import userLogin from './routes/userLogin';
import userRegister from './routes/userRegister'
import bookingServices from './routes/bookingSevices'
import ticketDetails from './routes/ticketDetails'
export const router = express.Router();
const port = 5005;
const app = express()
app.use(express.json());
const cors = require('cors');
app.use(cors());
import { insertBusData } from './staticData/busesData';


async function Server(){
    try{
    await sequelizeConnection.authenticate();
    await sequelizeConnection.sync();
    console.log("Connection has been established successfully");
}catch(error){
    console.log("Cannot connect to database", error);
}
}
Server();
// insertBusData()
app.use('/api',userLogin);
app.use('/api',userRegister);
app.use('/api',bookingServices);
app.use('/api',ticketDetails);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});