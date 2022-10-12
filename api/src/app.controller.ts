import {
    Controller,
    Get,
    Param,
    Post,
    Body
} from '@nestjs/common';
import { UserService } from './user.service';
import { ReviewService } from './review.service';
import { User as UserModel, Review as ReviewModel } from '@prisma/client';
import { CreateReviewDto } from './dto/CreateReviewDto';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller()
export class AppController {
    constructor(private readonly userService: UserService, private readonly reviewService: ReviewService) { }

    @Get('user/:id')
    async getUser(@Param('id') id: number): Promise<UserModel> {
        return this.userService.user({ id: id });
    }

    @Get('users/')
    async getUsers(): Promise<UserModel[]> {
        return this.userService.users({});
    }

    @Post('user')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
        return this.userService.createUser(createUserDto);
    }

    @Get('reviews/')
    async getReviews(): Promise<ReviewModel[]> {
        return this.reviewService.reviews({});
    }

    @Get('/reviews/userId:id')
    async getReviewsByUserId(@Param('userId') id: number): Promise<ReviewModel[]> {
        return this.reviewService.reviews({
            where: {
                authorId: { equals: id }
            }
        })
    }

    @Post('review')
    async createReview(@Body() reviewDto: CreateReviewDto): Promise<ReviewModel> {
        const { text, rating, userId, authorId, createDate } = reviewDto;
        return this.reviewService.createReview({
            text,
            rating,
            authorId,
            userId,
            createDate
        })
    }
}