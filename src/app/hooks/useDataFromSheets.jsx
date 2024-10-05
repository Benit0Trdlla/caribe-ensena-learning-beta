'use client'
import { parse } from 'papaparse';
import { useState, useEffect, useCallback } from 'react';
export const useDataFromSheets = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(url, { next: { revalidate: 30 } });
            const csvData = await response.text();
            const jsonData = parse(csvData, { header: true });
            setData(jsonData.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, isLoading, error };
}