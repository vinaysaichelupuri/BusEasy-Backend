import express, { Request, Response } from 'express';
import { TravelService } from '../services/travelServices';
import { Bus } from '../classes/bus';

const router = express.Router(); 

router.post('/bookings', async (req: Request, res: Response) => {
  try {
    
    const { name,source,destination,journeyDate,numberOfTickets } = req.body;
    const travel = new TravelService()
    const bus = new Bus(name,source,destination,journeyDate,numberOfTickets )
    const user  = await travel.bookingsForUser(bus)
      res.status(user.status);

  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;