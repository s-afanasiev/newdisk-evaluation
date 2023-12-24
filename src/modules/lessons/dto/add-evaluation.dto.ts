import { ApiProperty } from "@nestjs/swagger";

export class AddEvaluationDto {
    @ApiProperty({example: "1"})
    user_id: string;
    @ApiProperty({example: "56"})
    score: string;
}