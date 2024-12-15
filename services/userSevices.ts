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
  }