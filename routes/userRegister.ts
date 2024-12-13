import express, { Request, Response } from 'express';
import { UserService } from '../services/userSevices';

const router = express.Router(); 
router.post('/users', async (req: Request, res: Response) => {
  try {
    const { name, password,email,phoneNumber } = req.body;
    const user = await UserService.registerUser(name, password,email,phoneNumber);
    if (user) {
    if(user.status===200){
        res.status(user.status).json({message: 'Register successful'});
    }
    if(user.status===400){
        res.status(user.status).json({message: 'Already user exists'});
    }
}
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
    console.log(error)
  }
});
export default router;
