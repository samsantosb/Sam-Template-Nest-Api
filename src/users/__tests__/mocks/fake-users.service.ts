import { UpdateUserDto } from '../../dto/update-user.dto';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../user.schema';
import { fakeUser } from './fake-data';
import { IUsersService } from '../../interfaces/users.service.interface';

export const fakeUsersService: Partial<IUsersService> = {
  findOne: (id: string): Promise<User> => {
    return Promise.resolve({
      id: id,
      ...fakeUser,
    } as User);
  },
  findAll: (): Promise<User[]> => {
    return Promise.resolve([fakeUser as User, fakeUser as User]);
  },
  create: (createUserDto: CreateUserDto): Promise<User> => {
    return Promise.resolve({
      ...createUserDto,
    } as User);
  },
  update: (id: string, updateUserDto: UpdateUserDto): Promise<User> => {
    return Promise.resolve({
      id: id,
      ...updateUserDto,
    } as User);
  },
  delete: (id: string): Promise<User> => {
    return Promise.resolve({
      id: id,
      ...fakeUser,
    });
  },
};
