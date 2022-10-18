import { useState, useEffect } from 'react';
import { UserModel } from '../models/UserModel';
import axios from 'axios';

export function useUser(id: number): [loading: boolean, user: UserModel | undefined] {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        async function fetchUser(userId: number) {
            const { data } = await axios.get(`/api/user/${userId}`);
            setUser(data);
            setLoading(false);
        }
        fetchUser(id);
    }, [id]);

    return [loading, user];
}