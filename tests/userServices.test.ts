import { User } from '../models/userModel';
import { UserService } from '../services/userSevices';
jest.mock('../models/userModel');
const userServices = new UserService()

describe('UserService', () => {
  describe('registerUser', () => {
    it('should return 400 if user with the same name already exists', async () => {
      (User.findOne as jest.Mock).mockResolvedValueOnce({ name: 'existingUser' });
      const response = await userServices.registerUser('existingUser', 'test@email.com', 'password123', '1234567890');
      expect(response.status).toBe(400); 
      expect(User.findOne).toHaveBeenCalledWith({ where: { name: 'existingUser' } });
      expect(User.create).not.toHaveBeenCalled();
    });

    it('should return 200 when a new user is registered successfully', async () => {
      (User.findOne as jest.Mock).mockResolvedValueOnce(null);
      (User.create as jest.Mock).mockResolvedValueOnce({
        name: 'newUser',
        email: 'new@email.com',
        password: 'password123',
        phoneNumber: '1234567890',
      });

      const response = await userServices.registerUser('newUser', 'new@email.com', 'password123', '1234567890');
      expect(response.status).toBe(200); 
      expect(User.findOne).toHaveBeenCalledWith({ where: { name: 'newUser' } });
      expect(User.create).toHaveBeenCalledWith({
        name: 'newUser',
        email: 'new@email.com',
        password: 'password123',
        phoneNumber: '1234567890',
      });
    });
  });

  

});
