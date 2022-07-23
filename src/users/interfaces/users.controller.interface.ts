import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../user.schema';

export interface IUsersController {
  getUsers(): Promise<User[]>;
  getUser(id: string): Promise<User>;
  createUser(createUserDto: CreateUserDto): Promise<User>;
  updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User>;
  deleteUser(id: string): Promise<User>;
}
