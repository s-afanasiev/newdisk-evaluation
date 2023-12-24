import { ApiProperty } from "@nestjs/swagger";

export class AuthClientAnswerDto {
    @ApiProperty({example: "57e0209fedeb4cfabaa26d1acf57af51"})
    token: string;
}