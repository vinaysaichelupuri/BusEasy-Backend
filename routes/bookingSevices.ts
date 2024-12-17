import express, { Request, Response } from 'express';
import { TravelService } from '../services/travelServices';
import { Bus } from '../classes/bus';

const router = express.Router(); 
router.post('/book', async (req: Request, res: Response) => {
  try {
   
    const { name,source,destination,journeyDate,numberOfTickets } = req.body;
    const bus = new Bus(name,source,destination,journeyDate,numberOfTickets)
    const travelService  = new TravelService()
    const user = await travelService.bookBus(bus)
      res.status(user.status);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;