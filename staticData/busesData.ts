import { Vehicle } from "../models/vehicleModal";

export const vehiclesData = [
    { source: 'Delhi', destination: 'Mumbai', price: '1500', available: 'daily' },
    { source: 'Delhi', destination: 'Kolkata', price: '1200', available: 'daily' },
    { source: 'Mumbai', destination: 'Bangalore', price: '1800', available: 'daily' },
    { source: 'Chennai', destination: 'Hyderabad', price: '1400', available: 'daily' },
    { source: 'Bangalore', destination: 'Pune', price: '1600', available: 'daily' },
    { source: 'Hyderabad', destination: 'Jaipur', price: '1300', available: 'daily' },
    { source: 'Delhi', destination: 'Chennai', price: '2000', available: 'daily' },
    { source: 'Mumbai', destination: 'Delhi', price: '1500', available: 'daily' },
    { source: 'Bangalore', destination: 'Kochi', price: '1700', available: 'daily' },
    { source: 'Kolkata', destination: 'Chennai', price: '1600', available: 'daily' },
    { source: 'Hyderabad', destination: 'Bangalore', price: '1200', available: 'daily' },
    { source: 'Mumbai', destination: 'Chennai', price: '1500', available: 'daily' },
    { source: 'Delhi', destination: 'Bangalore', price: '2200', available: 'daily' },
    { source: 'Pune', destination: 'Goa', price: '1400', available: 'daily' },
    { source: 'Jaipur', destination: 'Delhi', price: '1300', available: 'daily' },
    { source: 'Kolkata', destination: 'Hyderabad', price: '1400', available: 'daily' },
    { source: 'Chennai', destination: 'Mumbai', price: '1700', available: 'daily' },
    { source: 'Bangalore', destination: 'Delhi', price: '1800', available: 'daily' },
    { source: 'Kochi', destination: 'Mumbai', price: '1600', available: 'daily' },
    { source: 'Goa', destination: 'Pune', price: '1300', available: 'daily' }
  ];

  export const insertBusData = ()=>{
    try{
        const data = Vehicle.bulkCreate(vehiclesData)
    }
    catch(e){
        console.log(e)
    }
  }