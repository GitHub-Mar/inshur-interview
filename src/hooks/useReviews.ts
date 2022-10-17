import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const useGetById = (path: string, id: number) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({})

    useEffect(() => {
        async function getData(id: number) {
            const { data } = await axios.get(`${path}${id}`);
            setData(data);
            setLoading(false);
        }
        getData(id);
    });

    return { data, loading };
}