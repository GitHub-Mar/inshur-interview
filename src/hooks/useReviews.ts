import React, { useState, useEffect } from 'react'
import { ReviewModel } from '../models/ReviewModel';
import axios from 'axios';

export function useReviews(id: number): [loading: boolean, data: ReviewModel[]] {
    const [loading, setLoading] = useState(true);
    const [reviews, setReviews] = useState<ReviewModel[]>([]);

    useEffect(() => {
        async function fetchReviews(id: number) {
            const { data } = await axios.get(`/reviews/userId/${id}`);
            setReviews(data);
            setLoading(false);
        }
        fetchReviews(id);
    });

    return [loading, reviews];
}