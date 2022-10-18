import { useState, useEffect } from 'react';
import { UserModel } from '../models/UserModel';

export function useUser(id: number): [loading: boolean, user: UserModel | undefined] {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        async function fetchUser(userId: number) {
            const response = await fetch(`/user/${userId}`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }
        fetchUser(id);
    }, [id]);

    return [loading, user];
}