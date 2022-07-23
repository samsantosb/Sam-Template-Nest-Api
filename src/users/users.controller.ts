import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';
import { IUsersService } from './interfaces/users.service.interface';
import { IUsersController } from './interfaces/users.controller.interface';

@Controller('users')
export class UsersController implements IUsersController {
  constructor(private readonly IuserService: IUsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.IuserService.findAll();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.IuserService.create(createUserDto);
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    const user = await this.IuserService.findOne(id);
    return user;
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.IuserService.update(id, updateUserDto);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.IuserService.delete(id);
  }
}
