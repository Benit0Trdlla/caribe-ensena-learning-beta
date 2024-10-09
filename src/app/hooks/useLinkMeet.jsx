'use client'
import { parse } from 'papaparse';
import { useState, useEffect, useCallback } from 'react';

export const useLinkMeet = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(url, { next: { revalidate: 30 } });

            if (!response.ok) {
                throw new Error("Error en la petición")
            }

            const csvData = await response.text();
            const jsonData = parse(csvData, { header: true });

            setData(jsonData.data);
            setError(null);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, isLoading, error };
}