import { User } from "../models/userModel";
export class UserService {
  async registerUser(name: string, email: string, password: string, phoneNumber: string) {
    const user = await User.findOne({ where: { name } });
    if (user) {
      return { status: 400, message: 'User already exists' };
    }
    await User.create({ name, password, email, phoneNumber });
    return { status: 200, message: 'Register successful' };
  }

    async loginUser(name: string, password: string) {
      const user = await User.findOne({ where: { name } });
  
      if (!user) {
        return { status: 404, message: 'User not found' };
      }
  
      const userPassword = user.password;
      if (userPassword === password) {
        return { status: 200, message: 'Login successful' };
      } else {
        return { status: 401, message: 'Incorrect password' };
      }
    }
  }