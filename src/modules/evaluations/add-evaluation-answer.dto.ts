import { ApiProperty } from "@nestjs/swagger";

export class AddEvaluationAnswerDto {
    @ApiProperty({example: "3"})
    "id": string;
    @ApiProperty({example: "1"})
    "user_id": string;
    @ApiProperty({example: "56"})
    "score": string;
}