import { UpdateUserDto } from './../dto/update-user.dto';
import { User } from 'src/users/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';

export abstract class IUsersService {
  abstract findAll(): Promise<User[]>;
  abstract findOne(id: string): Promise<User>;
  abstract create(createUserDto: CreateUserDto): Promise<User>;
  abstract update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
  abstract delete(id: string): Promise<User>;
}
