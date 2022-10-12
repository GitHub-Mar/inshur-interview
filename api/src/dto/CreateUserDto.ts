import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ required: true })
    username: string;

    @ApiProperty({ required: true })
    firstName: string;

    @ApiProperty({ required: true })
    lastName: string;

    @ApiProperty({ required: true })
    emailAddress: string;
};