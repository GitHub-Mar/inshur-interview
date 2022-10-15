import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';
import { ReviewService } from './review.service';
import { ModuleMocker, MockFunctionMetadata } from 'jest-mock';
import { User, Review } from '@prisma/client';
import exp from 'constants';
import { reverse } from 'dns';
import { CreateReviewDto } from './dto/CreateReviewDto';

const moduleMocker = new ModuleMocker(global);

describe('AppController unit tests', () => {
    let appController: AppController;
    let userService: UserService;
    let reviewService: ReviewService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [UserService, ReviewService, PrismaService],
        })
            .compile();
        userService = app.get<UserService>(UserService);
        reviewService = app.get<ReviewService>(ReviewService);
        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('getUser returns value from the service', async () => {
            const mockUser: User =
            {
                id: 1,
                username: 'testUser',
                firstName: 'Test',
                lastName: 'User',
                emailAddress: 'testuser@test.com'
            }

            jest.spyOn(userService, 'user').mockImplementationOnce(() => Promise.resolve(mockUser));

            const result = await appController.getUser(1);
            expect(userService.user).toBeCalledTimes(1);
            expect(result).toEqual(mockUser);
        });

        it('getUsers returns value from the service', async () => {
            const mockUsers: User[] = [
                {
                    id: 1,
                    username: 'testUser',
                    firstName: 'Test',
                    lastName: 'User',
                    emailAddress: 'testuser@test.com'
                }
            ];

            jest.spyOn(userService, 'users').mockImplementationOnce(() => Promise.resolve(mockUsers));
            const result = await appController.getUsers();

            expect(userService.users).toBeCalledTimes(1);
            expect(result).toHaveLength(mockUsers.length);
            expect(result[0]).toEqual(mockUsers[0]);
        });

        it('getReview returns value from the service', async () => {
            const mockReview: Review =
            {
                id: 1,
                text: 'Dummy review',
                rating: 3,
                userId: 2,
                authorId: 3,
                createDate: new Date('10/10/2022')
            };

            jest.spyOn(reviewService, 'review').mockImplementationOnce(() => Promise.resolve(mockReview));

            const result = await appController.getReview(1);
            expect(userService.user).toBeCalledTimes(1);
            expect(result).toEqual(mockReview);
        });

        it('getReviews returns value from the service', async () => {
            const mockReviews: Review[] = [
                {
                    id: 1,
                    text: 'Dummy review',
                    rating: 3,
                    userId: 2,
                    authorId: 3,
                    createDate: new Date('10/10/2022')
                }
            ];

            jest.spyOn(reviewService, 'reviews').mockImplementationOnce(() => Promise.resolve(mockReviews));
            const result = await appController.getReviews();

            expect(reviewService.reviews).toBeCalledTimes(1);
            expect(result).toHaveLength(mockReviews.length);
            expect(result[0]).toEqual(mockReviews[0]);
        });

        it('getReviewsByUserId returns value from the service', async () => {
            const mockReviews: Review[] = [
                {
                    id: 1,
                    text: 'Dummy review',
                    rating: 3,
                    userId: 2,
                    authorId: 3,
                    createDate: new Date('10/10/2022')
                }
            ];

            jest.spyOn(reviewService, 'reviews').mockImplementationOnce(() => Promise.resolve(mockReviews));
            const result = await appController.getReviewsByUserId(2);

            expect(reviewService.reviews).toBeCalledTimes(1);
            expect(result).toHaveLength(mockReviews.length);
            expect(result[0]).toEqual(mockReviews[0]);
        });

        it('getReviewsByUserId returns value from the service', async () => {
            const mockDto: CreateReviewDto = {
                authorId: 1,
                rating: 2,
                text: 'Test create review',
                userId: 3,
                createDate: new Date('10/10/2022')
            };

            const mockResult: Review =
            {
                id: 1,
                text: mockDto.text,
                rating: mockDto.rating,
                userId: mockDto.userId,
                authorId: mockDto.authorId,
                createDate: mockDto.createDate
            };

            jest.spyOn(reviewService, 'createReview').mockImplementationOnce(() => Promise.resolve(mockResult));
            const result = await appController.createReview(mockDto);

            expect(reviewService.createReview).toBeCalledTimes(1);
            expect(result).toEqual(mockResult);
        });
    });
});