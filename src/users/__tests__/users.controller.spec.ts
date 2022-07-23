import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users.controller';
import { fakeUsersService } from './mocks/fake-users.service';
import { fakeUser, fakeId } from './mocks/fake-data';
import { IUsersService } from '../interfaces/users.service.interface';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: IUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: IUsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<IUsersService>(IUsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
  });

  it('should create a user', async () => {
    const user = await usersController.createUser(fakeUser);
    expect(user).toEqual(fakeUser);
  });

  it('should return a user', async () => {
    const user = await usersController.getUser(fakeId);
    expect(user).toEqual({
      id: fakeId,
      ...fakeUser,
    });
  });

  it('should return all users', async () => {
    const users = await usersController.getUsers();
    expect(users).toEqual([fakeUser, fakeUser]);
  });

  it('should update a user', async () => {
    const user = await usersController.updateUser(fakeId, {
      ...fakeUser,
    });
    expect(user).toEqual({
      id: fakeId,
      ...fakeUser,
    });
  });

  it('should delete a user', async () => {
    const user = await usersController.deleteUser(fakeId);
    expect(user).toEqual({
      id: fakeId,
      ...fakeUser,
    });
  });
});
