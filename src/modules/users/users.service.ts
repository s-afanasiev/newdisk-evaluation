import { Injectable } from '@nestjs/common';
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
    ){}

    async pupilList() {
        let users = await this.userRepo.find();
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

        return user;
    }

}
