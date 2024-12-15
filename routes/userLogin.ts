import express, { Request, Response } from 'express';
import { UserService } from '../services/userSevices';
const userService  = new UserService()
const router = express.Router(); 
router.post('/user', async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const user = await userService.loginUser(name, password);
    if (user) {
      const { status, message } = await userService.loginUser(name, password);
      res.status(status).json({ message });
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
