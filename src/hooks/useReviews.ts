import React, { useState, useEffect } from 'react'
import { ReviewModel } from '../models/ReviewModel';

export function useReviews(id: number): [loading: boolean, data: ReviewModel[]] {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState<ReviewModel[]>([]);

    useEffect(() => {
        async function fetchReviews(id: number) {
            const response = await fetch(`/reviews/userId/${id}`);
            const data = await response.json();
            setReviews(data);
            setLoading(false);
        }
        fetchReviews(id);
    });

    return [loading, reviews];
}