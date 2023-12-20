import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
