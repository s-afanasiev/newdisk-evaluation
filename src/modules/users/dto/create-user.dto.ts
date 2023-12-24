import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: "Джонни"})
    name: string;
    @ApiProperty({example: "silverhand@mail.com"})
    email: string;
}