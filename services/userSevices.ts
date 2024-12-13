import { User } from "../models/userModel";


export class UserService {
    static async registerUser(name: string, email: string, password: string, phoneNumber: string) {
        const user = await User.findOne({ where: { name } });
        if (user) {
            return {status:400}
        };
        User.create({ name, password,email, phoneNumber });
        return {status:200}

    }
  
    static async loginUser(name: string, password: string) {
      const user = await User.findOne({ where: { name } });
      if (!user) {
        return{status:404}
      };
      const userPassword = user.password
      if(userPassword===password){
        return {status:200}
      }
      else{
        return {status:401}
      }
    }
  }