import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        private configService: ConfigService,
        @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>
    ){
        // console.log("UsersService:", this.configService.get("database"));
        // console.log("UsersService:", this.configService.get("DATABASE_HOST"));
    }
    private readonly users: User[] = [];
    pupilList() {
        return Promise.resolve(this.users);
    }

    async addPupil(createUserDto: CreateUserDto) {
        let user = await this.userRepo.findOneBy({
            name: createUserDto.name,
            email: createUserDto.email,
        })
        if (!user) {
            user = await this.userRepo.save(createUserDto);
        }
        //@ 2. Вариант №2: автоматический обновляем запись и возвращаем ?
        
        return user;
    }
}
