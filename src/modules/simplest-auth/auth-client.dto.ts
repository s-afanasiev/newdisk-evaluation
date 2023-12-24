import { ApiProperty } from "@nestjs/swagger";

export class AuthClientDto {
    @ApiProperty({example: "name1"})
    name: string;
    @ApiProperty({example: "pass1"})
    pass: string;
}