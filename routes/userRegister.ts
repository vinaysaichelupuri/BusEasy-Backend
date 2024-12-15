import express, { Request, Response } from 'express';
import { UserService } from '../services/userSevices';
const router = express.Router();
const userService = new UserService();
router.post('/users', async (req: Request, res: Response) => {
  try {
    const { name, password, email, phoneNumber } = req.body;
    const { status, message } = await userService.registerUser(name, password, email, phoneNumber);
    res.status(status).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'An unexpected error occurred' });
    console.error(error);
  }
});

export default router;
