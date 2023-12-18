import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get()
    pupilList(): Promise<User[]> {
        return this.usersService.pupilList();
    }

    @Post()
    addPupil(@Body() createUserDto: CreateUserDto) {
        return this.usersService.addPupil(createUserDto);
    }
}
