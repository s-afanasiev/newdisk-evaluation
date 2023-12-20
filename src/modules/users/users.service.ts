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

    async pupilList() {
        let users = await this.userRepo.find();
        await this.wait(2);
        return users;
    }

    async addPupil(createUserDto: CreateUserDto) {
        console.log("UsersService.addPupil: createUserDto=", createUserDto)
        let user = await this.userRepo.findOneBy({
            name: createUserDto.name,
            email: createUserDto.email,
        })
        if (!user) {
            user = await this.userRepo.save(createUserDto);
        }
        //@ 2. Вариант №2: автоматический обновляем запись и возвращаем ?
        console.log("UsersService.addPupil: result=", user)
        return user;
    }

    async wait(sec) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(true);
            }, sec*1000);
        })
    }
}
