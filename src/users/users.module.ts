import { User, UserSchema } from './user.schema';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IUsersService } from './interfaces/users.service.interface';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    {
      provide: IUsersService,
      useClass: UsersService,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
