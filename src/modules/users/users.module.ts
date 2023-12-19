import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule,
        TypeOrmModule.forFeature([UserEntity])
    ]
})
export class UsersModule {}
