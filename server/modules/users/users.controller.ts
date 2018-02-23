import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.addUser(createUserDto);
    }

    @Get()
    async findByEmail(@Query('email') email: string) {
        return await this.usersService.getUserByParam({ email });
    }

    @Get(':id')
    async findById(@Param('id') _id: string) {
        return await this.usersService.getUserByParam({ _id });
    }
}
