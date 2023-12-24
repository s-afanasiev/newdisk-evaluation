import { ApiProperty } from "@nestjs/swagger";

export class AddLessonAnswerDto {
    @ApiProperty({example: "1"})
    id: string;
    @ApiProperty({example: "music"})
    code: string;
    @ApiProperty({example: "Музыка"})
    name: string;
}