import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api/users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get()
    async pupilList(): Promise<UserEntity[]> {
        const result = await this.usersService.pupilList();
        return result;
    }

    @Post()
    addPupil(@Body() createUserDto: CreateUserDto) {
        console.log("UsersController.addPupil: createUserDto=", createUserDto)
        return this.usersService.addPupil(createUserDto);
    }
}
