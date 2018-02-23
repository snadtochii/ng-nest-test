import { Component } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserSchema } from './user.schema';

@Component()
export class UsersService {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) { }

    async addUser(createUserDto: CreateUserDto) {
        const user = await this.userModel.findOne({ sub: createUserDto.sub });
        if (!user) {
            return await new this.userModel(createUserDto);
        }
    }

     async getUserByParam(param) {
        const user = await this.userModel.find(param);
        if (user) {
            return user;
        } else {
            throw new Error('User not found');
        }
    }
}
