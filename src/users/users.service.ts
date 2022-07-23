import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { IUsersService } from './interfaces/users.service.interface';

@Injectable()
export class UsersService implements IUsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();

    if (!users) return [];

    return users;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModel.create(createUserDto);

    if (!createdUser) throw new NotFoundException('could not create the user');

    return createdUser;
  }

  async findOne(id: string): Promise<User> {
    const user: User =
      Types.ObjectId.isValid(id) && (await this.userModel.findById(id));

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User =
      Types.ObjectId.isValid(id) && (await this.userModel.findById(id));

    if (!user) throw new NotFoundException('User not found');

    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  async delete(id: string): Promise<User> {
    const user: User =
      Types.ObjectId.isValid(id) && (await this.userModel.findById(id));

    if (!user) throw new NotFoundException('User not found');

    return this.userModel.findByIdAndDelete(id);
  }
}
