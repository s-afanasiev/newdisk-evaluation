import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
    constructor(private configService: ConfigService){
        console.log("UsersService:", this.configService.get("database"));
        console.log("UsersService:", this.configService.get("DATABASE_HOST"));
    }
    private readonly users: User[] = [];
    pupilList() {
        return Promise.resolve(this.users);
    }

    addPupil(createUserDto: CreateUserDto) {
        this.users.push(createUserDto as User);
        return "ok!"
    }
}
