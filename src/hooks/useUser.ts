import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserModel } from '../models/UserModel';

export function useUser(id: number): [loading: boolean, user: UserModel | undefined] {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        async function fetchUser(userId: number) {
            const { data } = await axios.get(`/user/${userId}`);
            setUser(data);
            setLoading(false);
        }
        fetchUser(id);
    }, [id]);

    return [loading, user];
}