import express, { Request, Response } from 'express';
import { UserService } from '../services/userSevices';

const router = express.Router(); 
router.post('/user', async (req: Request, res: Response) => {
  try {
    const { name, password } = req.body;
    const user = await UserService.loginUser(name, password);
    if (user) {
    if(user.status===200){
        res.status(user.status).json({message: 'Login successful'});
    }
    if(user.status===401){
        res.status(user.status).json({message: 'Wrong password'});
    }
    if(user.status===404){
        res.status(user.status).json({message: 'No user found'});
    }
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});
export default router;
