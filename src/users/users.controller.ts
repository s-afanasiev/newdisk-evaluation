import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    pupilList() {
        return "pupil list!"
    }

    @Post()
    addPupil() {
        return "add pupil!"
    }
}
