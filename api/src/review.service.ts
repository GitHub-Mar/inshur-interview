import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Review, Prisma } from '@prisma/client';

@Injectable()
export class ReviewService {
    constructor(private prisma: PrismaService) { }

    async review(
        reviewWhereInput: Prisma.ReviewWhereUniqueInput,
    ): Promise<Review | null> {
        return this.prisma.review.findUnique({
            where: reviewWhereInput,
        });
    }

    async reviews(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
        where?: Prisma.ReviewWhereInput;
    }): Promise<Review[]> {
        const { skip, take, cursor, orderBy, where } = params;
        return this.prisma.review.findMany({
            skip,
            take,
            cursor,
            orderBy,
            where
        });
    }

    async createReview(data: Prisma.ReviewUncheckedCreateInput): Promise<Review> {
        return this.prisma.review.create({
            data
        });
    }
}