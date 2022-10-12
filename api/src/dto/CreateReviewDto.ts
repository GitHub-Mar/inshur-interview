import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
    @ApiProperty()
    text: string;

    @ApiProperty({ required: true, default: 3 })
    rating: number;

    @ApiProperty({ required: true })
    authorId: number;

    @ApiProperty({ required: true })
    userId: number;

    @ApiProperty({ required: true, default: new Date() })
    createDate: Date;
};