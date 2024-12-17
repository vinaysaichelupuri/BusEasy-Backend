import express, { Request, Response } from 'express';
import { UserService } from '../services/userSevices';
const userService  = new UserService()
const router = express.Router(); 
router.post('/user', async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const user = await userService.loginUser(name, password);
    res.status(user.status).json({ message: user.message });
    console.log(user.message)
    console.log(user.status)  
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default router;

