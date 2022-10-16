export interface ReviewModel {
    id: number;
    text: string;
    rating: number;
    authorId: number;
    userId: number;
    createDate: Date;
};