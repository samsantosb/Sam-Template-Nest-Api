import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../user.schema';
import { CreateUserDto } from '../../dto/create-user.dto';
import { fakeUser } from './fakedata';

export const fakeUsersRepository = {
  find: (): Promise<User[]> => {
    return Promise.resolve([fakeUser as User, fakeUser as User]);
  },
  findById: (id: string): Promise<User> => {
    return Promise.resolve({
      id: id,
      ...fakeUser,
    } as User);
  },
  create: (createUserDto: CreateUserDto): Promise<User> => {
    return Promise.resolve({
      ...createUserDto,
    } as User);
  },
  findByIdAndUpdate: (
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> => {
    return Promise.resolve({
      id: id,
      ...updateUserDto,
    } as User);
  },
  findByIdAndDelete: (id: string): Promise<User> => {
    return Promise.resolve({
      id: id,
      ...fakeUser,
    });
  },
};
