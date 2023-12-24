import { ApiProperty } from "@nestjs/swagger";

export class AddLessonDto {
    @ApiProperty({required: true, example: "music"})
    code: string;
    @ApiProperty({required: true, example: "Музыка"})
    name: string;
}