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

    @Get('api/user/:id')
    async getUser(@Param('id') id: string): Promise<UserModel | null> {
        return this.userService.user({ id: parseInt(id) });
    }

    @Get('api/users/')
    async getUsers(): Promise<UserModel[]> {
        return this.userService.users({});
    }

    @Post('api/user')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
        return this.userService.createUser(createUserDto);
    }

    @Get('api/review/:id')
    async getReview(@Param('id') id: string): Promise<ReviewModel | null> {
        return this.reviewService.review({ id: parseInt(id) });
    }

    @Get('api/reviews/')
    async getReviews(): Promise<ReviewModel[]> {
        return this.reviewService.reviews({});
    }

    @Get('api/reviews/userId/:id')
    async getReviewsByUserId(@Param('id') id: string): Promise<ReviewModel[]> {
        return this.reviewService.reviews({
            where: {
                userId: { equals: parseInt(id) }
            }
        })
    }

    @Post('api/review')
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