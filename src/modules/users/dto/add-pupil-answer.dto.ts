import { ApiProperty } from "@nestjs/swagger";

export class AddPupilAnswerDto {
    @ApiProperty({example: "1"})
    "id": string;
    @ApiProperty({example: "Джонни"})
    name: string;
    @ApiProperty({example: "silverhand@mail.com"})
    email: string;
}