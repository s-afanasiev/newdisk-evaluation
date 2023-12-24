import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBasicAuth, ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddPupilAnswerDto } from './dto/add-pupil-answer.dto';

@ApiTags("Users")
@Controller('api/users')
@ApiBasicAuth("Token auth")
export class UsersController {
    constructor(private usersService: UsersService) {}
    @Get()
    @ApiResponse({ status: 200, type: [AddPupilAnswerDto]})
    async pupilList(): Promise<UserEntity[]> {
        const result = await this.usersService.pupilList();
        return result;
    }

    @Post()
    @ApiCreatedResponse({ description: 'successfully created.', type: AddPupilAnswerDto})
    addPupil(@Body() createUserDto: CreateUserDto) {
        console.log("UsersController.addPupil: createUserDto=", createUserDto)
        return this.usersService.addPupil(createUserDto);
    }
}
